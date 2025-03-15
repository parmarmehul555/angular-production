import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arry-crud',
  standalone: true,
  imports: [NgFor,FormsModule,NgStyle,NgClass,NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './arry-crud.component.html',
  styleUrl: './arry-crud.component.css'
})
export class ArryCrudComponent {
  arr=["sachin","mehul","jay"]

  tempArr=["sachin","mehul","jay"]
  fieldValue=""

  btnValue="Add"

  isEditable=-1


  deleteStudent(i:any){
    this.arr.splice(i,1)
  }

  AddStudent(){
    if(this.isEditable==-1){
      this.arr.push(this.fieldValue)
      this.fieldValue=""
      this.tempArr=this.arr
      return
    }

    this.arr[this.isEditable]=this.fieldValue
    this.fieldValue=""
    this.isEditable=-1
    this.btnValue="Add"
    this.tempArr=this.arr
  }

  selectValue(i:any){
    this.btnValue="Edit"
    this.isEditable=i
    this.fieldValue=this.arr[i]
  }

  search(e:any){
    if(e.target.value==""){
      this.arr=this.tempArr
    }
    this.arr=this.arr.filter((val)=>{
      return val.includes(e.target.value)
    })
  }


  isActive:boolean=false

  // mulStyle={
  //   'color':'red'
  // }

  // mulClasses={
  //   class1:true,
  //   class2:true,
  //   class3:true
  // }

  // isGreeting=false

  // color="dfaf"

  // obj={
  //   "color":"blue"
  // }


  // tglBtn:boolean=true

  // toggleBtn(){
  //   this.tglBtn=!this.tglBtn
  // }

  // meStyle:any={}
  

  // discoInterval: any;

  // startColor() {
  //   if (this.discoInterval) {
  //     clearInterval(this.discoInterval); 
  //   }

  //   this.discoInterval = setInterval(() => {
  //     const r = Math.ceil(Math.random() * 255);
  //     const g = Math.ceil(Math.random() * 255);
  //     const b = Math.ceil(Math.random() * 255);
  //     this.meStyle={
  //       "background-color": "rgb("+r+","+g+","+b+")",
  //       "height":"100vh"
  //     }
  //     // document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  //     // document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
  //   }, 100);
  // }

  // stopColor() {
  //   if (this.discoInterval) {
  //     clearInterval(this.discoInterval);
  //   }
  // }




  // name:boolean=true



  // tglValue(){
  //   this.name=!this.name
  // }
  mulStyle:any={}
  inter:any=""

  startLight(){
    if(this.inter){
      clearInterval(this.inter)
    }

    this.inter=setInterval(()=>{
      let r=Math.ceil(Math.random()*255)
      let g=Math.ceil(Math.random()*255)
      let b=Math.ceil(Math.random()*255)

      this.mulStyle={
        "background-color":'rgb('+r+','+g+','+b+')',
        "height":"100vh"
      }
    },100)
  }


  stopLight(){
    if(this.inter){
      clearInterval(this.inter)
    }
  }




}
