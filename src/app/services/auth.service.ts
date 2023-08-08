import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
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
    localStorage.setItem('isLoged', 'true');

    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    localStorage.setItem('isLoged', 'false');
    this.afAuth.signOut();
  }
}
