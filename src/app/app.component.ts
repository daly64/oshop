import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    authService.$user.subscribe((user) => {
      if (user) userService.save(user);
    });
  }
}
