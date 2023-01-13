import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user$ = this.authService.currentUser$;

  constructor(
    private router: Router,
    public authService: AuthenticationService,
    ) {}

    logout() {
      this.authService.logout().subscribe(() => {
        this.router.navigate(['/']);
      })
    }

}
