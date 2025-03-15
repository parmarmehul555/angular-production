import { NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { log } from 'node:console';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,NgStyle],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  // private fb=inject(FormBuilder)
  

  private _fb=inject(FormBuilder)

  studentForm=this._fb.group({
    studentName:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
    contactNo:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
    spi:['',[Validators.required,Validators.min(0),Validators.max(10)]],
  })

  obj={
    'border':'5px solid red'
  }

  newObj={
    'border':'5px solid green'
  }

  saveData(){
    console.log(this.studentForm.value);
  }

  // userForm?: FormGroup
  // constructor(private _fb:FormBuilder){}

  // this.userForm=this._fb.group({
  //   username:['',[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z0-9._%+-]+@gmail.com$")]],
  //   password:['',[Validators.required]]
  // })
  
  // userForm=new FormGroup({
  //   username:new FormControl('',[Validators.required]),
  //   password:new FormControl('',[Validators.required]),
  //   contactNo:new FormControl('',[Validators.pattern("[0-9]{10}"),Validators.required])
  // })

  // userForm = new FormGroup({
  //   username: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required]),
  // });


  // userForm=new FormGroup({
  //   username:new FormControl('',[Validators.required,Validators.minLength(3)]),
  //   email:new FormControl('',[Validators.required,Validators.email]),
  //   mobileNo:new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")])
  // })
}
