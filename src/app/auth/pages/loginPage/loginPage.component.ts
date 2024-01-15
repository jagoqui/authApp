import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

interface LoginForm{
  email: FormControl<string>,
  password: FormControl<string>
}

@Component({
  selector: 'app-login-page',
  standalone: true,
  providers: [AuthService],
  imports: [
    CommonModule, ReactiveFormsModule, RouterLink
  ],
  templateUrl: './loginPage.components.html',
  styleUrl: './loginPage.component.css'
})
export class LoginPageComponent {
  private authSvc: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  loginForm: FormGroup<LoginForm> = new FormGroup<LoginForm>({
    email: new FormControl<string>('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true
    }),
    password: new FormControl<string>('', {
      validators:[Validators.required, Validators.minLength(6)],
      nonNullable: true
    })
  })

  get controls(): LoginForm{
    return this.loginForm.controls;
  }

  login(): void{
    const {email, password} = this.loginForm.value
    if(!email || !password){
      return;
    }
    this.authSvc.login({
      email, password
    })
    .subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: (error) =>  Swal.fire('Error', error, 'error')
    });
  }
}
