import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'google-btn',
  templateUrl: './google-btn.component.html',
  styleUrls: ['./google-btn.component.css'],
})
export class GoogleBtnComponent {
  constructor(private afAuth: AngularFireAuth) {}
  login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    
  }
}
