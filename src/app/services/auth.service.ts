import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private headers: Headers = new Headers({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  isUserAuthenticated() {
    return this.isAuthenticated;
  }

  authenticateUser(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }
}
