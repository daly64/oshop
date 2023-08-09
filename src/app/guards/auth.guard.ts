import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let isLoged = localStorage.getItem('isLoged');
  let router = inject(AuthService).router;

  if (isLoged == 'true') return true;

  router.navigate(['login']);
  return false;
};
