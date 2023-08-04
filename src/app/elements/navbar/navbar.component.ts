import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  title = 'shop';
  user: firebase.User | null = null;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((auth) => {
      console.log(auth);

      this.user = auth;
    });
  }
  logout() {
    this.afAuth.signOut();
  }
}
