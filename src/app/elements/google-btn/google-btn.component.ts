import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'google-btn',
  templateUrl: './google-btn.component.html',
  styleUrls: ['./google-btn.component.css'],
})
export class GoogleBtnComponent {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}
  login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['shopping-cart']);
  }
}
