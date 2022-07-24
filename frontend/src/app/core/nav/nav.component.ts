import { AuthService } from './../authentication/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {

  constructor(protected auth: AuthService) {
  } 
}
