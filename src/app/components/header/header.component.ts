import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user$ = this.authService.currentUser$;

  constructor(
    private router: Router,
    public authService: AuthenticationService,
    ) {}

  goToHome() {
    this.router.navigate(['/home'])
  }
  goToProfile() {
    this.router.navigate(['/profile'])
  }
}
