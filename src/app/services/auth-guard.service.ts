import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private authservice: AuthService,
    private router: Router,
    private state: RouterStateSnapshot
  ) {}
  canActivate() {
    if (this.authservice) {
      this.authservice.$user.subscribe((user) => {
        if (user) {
          return true;
        }
        this.router.navigate(['login'], {
          queryParams: { returnUrl: this.state.url },
        });
        return false;
      });
    }
  }
}
