import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(public authService: AuthService, private _router: Router, private _notificationService: NotificationService) {}

  public onSubmit(): void {
    this.authService.onRegister(this.authService.registerForm.value).subscribe({
      next: response => {
        this.authService.registerForm.reset();
        this._router.navigateByUrl('/login');
        this._notificationService.displayNotification('success', 'Success', 'Registration successful, please login.');
      },
      error: error => {
        this._notificationService.displayNotification('error', 'Error', 'Oops, something went wrong');
      }
    });
  }
}
