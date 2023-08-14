import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, UserInfo } from 'firebase/auth';
import firebase from 'firebase/compat';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, public router: Router) {
    this.user$ = afAuth.authState as Observable<firebase.User>;
  }

  isLogin(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map((user) => {
        return user ? true : false;
      })
    );
  }

  login() {
    this.afAuth.signInWithRedirect(new GoogleAuthProvider());
    this.router.navigate(['check-out']);
  }
  logout() {
    localStorage.setItem('isLoged', 'false');
    this.afAuth.signOut();
    this.router.navigate(['login']);
  }
}
