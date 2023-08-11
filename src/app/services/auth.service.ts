import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, UserInfo } from 'firebase/auth';
import firebase from 'firebase/compat';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: UserInfo;
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, public router: Router) {
    this.user$ = afAuth.authState as Observable<firebase.User>;

    afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }

  login() {
    localStorage.setItem('isLoged', 'true');
    let provider = new GoogleAuthProvider();

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });

    this.afAuth.signInWithRedirect(provider);
    this.router.navigate(['check-out']);
  }
  logout() {
    localStorage.setItem('isLoged', 'false');
    this.afAuth.signOut();
    this.router.navigate(['login']);
  }
}
