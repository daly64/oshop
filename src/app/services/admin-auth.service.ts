import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  constructor(private auth: AuthService, private userService: UserService) {}
  isAdmin(): boolean {
    let uid = this.auth.user.uid;
    let appUser = this.userService.get(uid);
    appUser.valueChanges().forEach((value) => {
      console.log(value);
      if (value)
        localStorage.setItem('isAdmin', value.isAdmin ? 'true' : 'false');
    });

    return true;
  }
}
