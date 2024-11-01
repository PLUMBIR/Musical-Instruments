import { AfterViewInit, Component } from '@angular/core';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PianoComponent } from "./piano/piano.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    RouterOutlet,
    SideNavComponent,
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})

export class BodyComponent { }
