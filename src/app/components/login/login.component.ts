import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../../models/auth/login-response';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username:string = "";
  password:string = "";

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  
  login() {
    this.authService.authenticateUser(this.username, this.password).subscribe((loginResp: LoginResponse) => {
      if (!loginResp.isSuccessful) return;
      this.authService.setCredentials(loginResp.credentials);
      if (this.authService.isAdmin()) {
        this.router.navigateByUrl('/students');
      } else if (this.authService.isStudent()) {
        console.log("pepga")
        this.router.navigateByUrl(`/students/${loginResp.credentials.studentId}`);
      }
    });
    
  }
}
