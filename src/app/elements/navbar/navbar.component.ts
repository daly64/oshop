import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  title: string = 'shop';
  $user: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    if (afAuth.authState) {
      this.$user = afAuth.authState;
    }
  }
  /*     afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    }); */

  logout() {
    this.afAuth.signOut();
    this.router.navigate(['login']);
  }
}
