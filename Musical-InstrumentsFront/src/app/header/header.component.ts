import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    MdbRippleModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router: Router = inject(Router);
}
