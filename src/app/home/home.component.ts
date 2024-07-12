import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router, private authService: AuthService) {}

  navigateToLogin() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/delete-account']); 
    } else {
      this.router.navigate(['/login']);
    }
  }
}
