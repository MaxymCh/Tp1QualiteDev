import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  checkoutForm = this.formBuilder.group({
    name: '',
    password: ''
  });

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit(): void {
    const username = this.checkoutForm.get('name')?.value;
    const password = this.checkoutForm.get('password')?.value;
    if (username && password) {
      if (this.loginService.login(username, password)) {
        this.router.navigate(['/']);
      } else {
        window.alert('Wrong username or password!');
      }
    }
  }
  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
