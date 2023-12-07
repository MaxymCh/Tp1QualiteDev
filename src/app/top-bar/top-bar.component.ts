import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  isAuthenticated(): boolean {
    return this.loginService.isAuthenticated();
  }

  logout(): void {
    this.loginService.logout(); 
    this.router.navigate(['/']);
  
  }

 }
