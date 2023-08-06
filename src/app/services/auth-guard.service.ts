import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authservice: AuthService, private router: Router) {}
  canActivate() {
    if (this.authservice) {
      this.authservice.$user.subscribe((user) => {
        if (user) {
          return true;
        }
        this.router.navigate(['login']);
        return false;
      });
    }
  }
}
