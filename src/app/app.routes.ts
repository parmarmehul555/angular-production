import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { ResumeDemoComponent } from './resume-demo/resume-demo.component';
import { ArryCrudComponent } from './arry-crud/arry-crud.component';
import { ArrayOfObjectComponent } from './array-of-object/array-of-object.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { authenticationGuard } from './authentication.guard';

export const routes: Routes = [
    {path:'',component:SignUpComponent},
    {path:'login',component:LoginComponent},
    // {path:'header',component:HeaderComponent},
    {path:'resume',component:ResumeBuilderComponent,canActivate:[authenticationGuard]},
    {path:'arrayCrud',component:ArryCrudComponent,canActivate:[authenticationGuard]},
    {path:'arrayOfObject',component:ArrayOfObjectComponent,canActivate:[authenticationGuard]},
    {path:'reactiveForm',component:ReactiveFormComponent,canActivate:[authenticationGuard]},
];
