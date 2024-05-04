import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token: string | null = localStorage.getItem('token'); 
  if(token) {
    return true;
  } else {
    inject(Router).navigateByUrl('/login');
    return false;
  }
};
