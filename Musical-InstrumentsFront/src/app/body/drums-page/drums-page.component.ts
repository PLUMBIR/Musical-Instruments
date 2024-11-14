import { Component } from '@angular/core';
import { SideNavComponent } from "../side-nav/side-nav.component";
import { DrumsComponent } from "../drums/drums.component";

@Component({
  selector: 'app-drums-page',
  standalone: true,
  imports: [SideNavComponent, DrumsComponent],
  templateUrl: './drums-page.component.html',
  styleUrl: './drums-page.component.scss'
})

export class DrumsPageComponent {

}
