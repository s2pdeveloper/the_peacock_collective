import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import ChangepwdComponent from './components/changepwd/changepwd.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-pass', component: ForgetPassComponent },
  { path: 'change-pass', component: ChangepwdComponent },
];
@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPassComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AuthLayoutModule {}
