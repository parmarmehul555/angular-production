import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array-of-object',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './array-of-object.component.html',
  styleUrl: './array-of-object.component.css'
})
export class ArrayOfObjectComponent {
  isEdit=-1
  arr:any=[
    {name:"sachin",surname:"patadiya"},
    {name:"mehul",surname:"parmar"},
  ]
  
  obj:any={   
    name:"",
    surname:""
  }

  deleteStudent(i:any){
    this.arr.splice(i,1)
  }
  
  addStudent() {
    if (this.isEdit === -1) {
      this.arr.push({...this.obj});
    } else {
      this.arr[this.isEdit].name = this.obj.name;
      this.arr[this.isEdit].surname = this.obj.surname;
    }
  
    this.obj.name = "";
    this.obj.surname = "";
    this.isEdit = -1;
  }
  

  selectIndex(i:any){
    this.isEdit=i
    this.obj.name=this.arr[i].name
    this.obj.surname=this.arr[i].surname
  }
}
