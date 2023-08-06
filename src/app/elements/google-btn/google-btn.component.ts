import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'google-btn',
  templateUrl: './google-btn.component.html',
  styleUrls: ['./google-btn.component.css'],
})
export class GoogleBtnComponent {
  constructor(private authservice: AuthService) {}
  login() {
    this.authservice.login();
  }
}
