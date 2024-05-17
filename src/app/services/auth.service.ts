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

  constructor(private http: HttpClient) {}

  isUserAuthenticated() {
    return this.isAuthenticated || localStorage.getItem('token') !== null;
  }

  getToken() {
    return this.credentials.token || localStorage.getItem('token') || '';
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
            if (response.credentials.roles.includes('user')) {
              localStorage.setItem('studentId', response.credentials.studentId.toString());
            }
          }
        })
      );
  }
}
