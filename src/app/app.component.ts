import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { log } from 'node:console';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstdemoapp';
  // isDisable=false

  // temp=false

  // demo(){
  //   setInterval(()=>{
  //     this.temp=true
  //   },1000)
  // }
  // ngOnInit(){
  //   this.demo()
  // }


  // temp=""


  // display(e:any){
  //   this.temp=e.target.value
  //   console.log(e.target.value);
  // }


  // displayInConsol(){
  //   console.log("hello");
  // }


  // ngOnInit(){
  //   setInterval(()=>{
  //     console.log("idaikjfkaldjflka");
  //   },1000)
  // }
  
}
