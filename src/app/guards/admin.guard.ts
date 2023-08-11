import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AdminAuthService } from '../services/admin-auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  inject(AdminAuthService).isAdmin();

  let isAdmin = localStorage.getItem('isAdmin');

  if (isAdmin == 'true') return true;
  return false;
};
