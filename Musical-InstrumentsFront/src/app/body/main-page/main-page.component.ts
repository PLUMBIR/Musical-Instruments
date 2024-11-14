import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    RouterModule,
    MdbRippleModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})

export class MainPageComponent {
  router: Router = inject(Router);
}
