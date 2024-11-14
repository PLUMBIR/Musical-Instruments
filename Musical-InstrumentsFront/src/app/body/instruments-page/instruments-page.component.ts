import { Component, inject } from '@angular/core';
import { SideNavComponent } from "../side-nav/side-nav.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-instruments-page',
  standalone: true,
  imports: [
    RouterModule,
    SideNavComponent
  ],
  templateUrl: './instruments-page.component.html',
  styleUrl: './instruments-page.component.scss'
})

export class InstrumentsPageComponent {
  router: Router = inject(Router);
}
