import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(public authService: AuthService) {}

  public onSubmit(): void {
    this.authService.onRegister(this.authService.registerForm.value).pipe(
      finalize(() => {
        console.log('test');
      })
    ).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
