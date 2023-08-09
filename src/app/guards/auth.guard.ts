import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let isLoged = localStorage.getItem('isLoged');
  let router = inject(AuthService).router;
  console.log('url : ', route.url);

  if (isLoged == 'true') return true;

  router.navigate(['login']);
  return false;
};
