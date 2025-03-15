import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  private _fb = inject(FormBuilder)
  private _router = inject(Router)

  signUpForm = this._fb.group({
    userName:[''],
    password: [''],
    email: [''],
    contact: ['']
  })

  onSubmit(){
    localStorage.setItem('email', this.signUpForm.get('email')?.value!)
    localStorage.setItem('password', this.signUpForm.get('password')?.value!)
    console.log(this.signUpForm.get('email')?.value)
    console.log(this.signUpForm.get('password')?.value)
    this._router.navigate(['/login'])
  }
}
