import { routes } from './../app.routes';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private router = inject(Router);
  loginForm:FormGroup = new FormGroup({
    username:new FormControl(""),
    password:new FormControl("")
  })
  
  login(){
    console.log(this.loginForm.value);
    localStorage.setItem("user",JSON.stringify(this.loginForm.value));
    this.router.navigate(['/resume']);
  }
}
