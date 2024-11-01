import { AfterViewInit, Component, HostListener } from '@angular/core';
import { SideNavComponent } from "../side-nav/side-nav.component";

@Component({
  selector: 'app-drums',
  standalone: true,
  imports: [
    SideNavComponent
  ],
  templateUrl: './drums.component.html',
  styleUrl: './drums.component.scss'
})
export class DrumsComponent {
  
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key.toLowerCase();
    this.playSound(key);
  }

  playSound(key: string) {
    const audioElement = document.querySelector(`audio[data-a="${key}"]`) as HTMLAudioElement;
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  }
}
