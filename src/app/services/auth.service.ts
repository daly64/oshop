import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private router: ActivatedRoute) {
    if (afAuth.authState) {
      this.$user = afAuth.authState as Observable<firebase.User>;
    }
  }
  login() {
    let returnUrl = this.router.snapshot.paramMap.get('returnUrl')||'';
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.signOut();
  }
}
