import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private apiUrl = environment.apiUrl;

  constructor(public authService: AuthService, private router: Router, private http: HttpClient) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  deleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      const token = this.authService.getToken();
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      this.http.delete(`${this.apiUrl}/api/v1/user`, { headers })
        .subscribe(response => {
          alert('Your account has been deleted successfully.');
          this.authService.logout();
          this.router.navigate(['/']);
        }, error => {
          console.error('Error deleting account:', error);
          alert('There was an error deleting your account.');
        });
    }
  }
}
