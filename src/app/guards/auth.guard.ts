import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let isLoged = localStorage.getItem('isLoged');
  if (isLoged == 'true') return true;
  return false;
};
