import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public authService: AuthService, private _notificationService: NotificationService, private _router: Router) {}

  public onSubmit(): void {
    this.authService.onLogin(this.authService.loginForm.value).subscribe({
      next: response => {
        localStorage.setItem('token', response.token);
        this._router.navigateByUrl('/dashboard');
        this._notificationService.displayNotification('success', 'Success', 'Login successful!');
      },
      error: error => {
        error.error.message === 'Unauthorized' ? this._notificationService.displayNotification('error', 'Error', 'Either email or password is invalid!') : this._notificationService.displayNotification('error', 'Error', 'Oops, something went wrong');
      }
    });
  }
}
