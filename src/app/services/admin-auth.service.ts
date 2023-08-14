import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  constructor(private auth: AuthService, private userService: UserService) {}
  isAdmin(): Observable<boolean> {
    return this.auth.user$.pipe(
      map((user) => {
        if (user) {
          this.userService
            .get(user.uid)
            .valueChanges()
            .pipe(map((user) => (user ? user.isAdmin : false)));
        }
        return false;
      })
    );
  }
}
