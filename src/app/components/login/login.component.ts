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
      console.log("loin resp", loginResp);
      if (!loginResp.isSuccessful) return;
      if (loginResp.credentials.roles.map(x => x.toLowerCase()).includes('admin')) {
        this.router.navigateByUrl('/home');
      } else if (loginResp.credentials.roles.includes('student')) {
        this.router.navigate(['/student', loginResp.credentials.studentId]);
      }
    });
    
  }
}