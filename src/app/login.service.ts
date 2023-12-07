import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users = [
    { name: 'utilisateur1', password: 'motdepasse1' },
  ];
  private isLoggedIn = false;
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  logout(): void {
    this.isLoggedIn = false; 
  }

  login(username: string, password: string): boolean {
    const user = this.users.find((u) => u.name === username && u.password === password);
    if (!!user) {
      this.isLoggedIn = true;
    }
    return !!user;
  }
  constructor(
    private http: HttpClient
  ) {}
}
