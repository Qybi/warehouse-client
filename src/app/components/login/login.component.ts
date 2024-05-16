import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
    if (this.authService.authenticateUser(this.username, this.password)) {
      console.log('User authenticated');
      this.router.navigateByUrl('/home');
    } else {
      console.log('User not authenticated');
    }
  }
}
