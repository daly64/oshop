import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  title = 'shop';
  displayName: string | null | undefined;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((auth) => {
      console.log(auth);

      this.displayName = auth?.displayName;
    });
  }
  logout() {
    this.afAuth.signOut();
  }
}
