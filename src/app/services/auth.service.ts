import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $user: Observable<firebase.User | null>;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    if (afAuth.authState) {
      this.$user = afAuth.authState;
    }
  }
  login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['shopping-cart']);
  }
  logout() {
    this.afAuth.signOut();
    this.router.navigate(['login']);
  }
}
