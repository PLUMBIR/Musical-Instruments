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

  readonly phoneNumber: string = '+375 (33) 621-10-10';
  showCopiedMessage: boolean = false;

  copyPhoneNumber() {
    navigator.clipboard.writeText(this.phoneNumber).then(() => {
      this.showCopiedMessage = true;
      setTimeout(() => {
        this.showCopiedMessage = false;
      }, 600);
    });
  }
}
