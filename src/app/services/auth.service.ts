import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials, LoginResponse } from '../models/auth/login-response';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
  });
  private credentials: Credentials = {} as Credentials;

  constructor(private http: HttpClient) {
    this.isAuthenticated = !!localStorage.getItem('token');
    this.credentials.token = localStorage.getItem('token') || '';
    this.credentials.roles = localStorage.getItem('roles')?.split(',') || [];
    this.credentials.username = localStorage.getItem('username') || '';
  }

  isUserAuthenticated() {
    return this.isAuthenticated;
  }

  getCredentials() {
    return this.credentials;
  }

  getToken() {
    return this.credentials.token || localStorage.getItem('token') || '';
  }

  isAdmin() { 
    return this.credentials.roles.map(x => x.toLowerCase()).includes('admin');
  }

  isStudent() { 
    return this.credentials.roles.map(x => x.toLowerCase()).includes('student');
  }

  setCredentials(credentials: Credentials) { 
    this.credentials = credentials;
  }

  authenticateUser(
    username: string,
    password: string
  ): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>('/login', {
        username,
        password,
      })
      .pipe(
        tap((response: LoginResponse) => {
          if (response.isSuccessful) {
            this.isAuthenticated = true;
            this.credentials = response.credentials;
            localStorage.setItem('token', response.credentials.token);
            localStorage.setItem('username', response.credentials.username);
            localStorage.setItem('roles', response.credentials.roles.join(','));
            if (response.credentials.roles.includes('Student')) {
              localStorage.setItem('studentId', (response.credentials.studentId ?? '').toString());
            }
          }
        })
      );
  }
}
