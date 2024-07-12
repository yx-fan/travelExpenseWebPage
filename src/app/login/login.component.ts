import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe((response: any) => {
      if (response.status === 'success') {
        this.authService.setToken(response.data.token);
        this.router.navigate(['/']);
      } else {
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    }, error => {
      this.errorMessage = 'Login failed. Please check your credentials.';
    });
  }
}
