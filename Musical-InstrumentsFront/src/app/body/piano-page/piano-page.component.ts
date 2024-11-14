import { Component } from '@angular/core';
import { SideNavComponent } from "../side-nav/side-nav.component";
import { PianoComponent } from "../piano/piano.component";

@Component({
  selector: 'app-piano-page',
  standalone: true,
  imports: [
    SideNavComponent, 
    PianoComponent
  ],
  templateUrl: './piano-page.component.html',
  styleUrl: './piano-page.component.scss'
})
export class PianoPageComponent {

}
