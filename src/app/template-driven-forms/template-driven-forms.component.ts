import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule,NgStyle,NgIf],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {
  
  signUp={
    name:"",
    pass:"",
    email:"",
    mobileNo:""
  }

  signUpUser(val:any){
    console.log(val);
  }
}
