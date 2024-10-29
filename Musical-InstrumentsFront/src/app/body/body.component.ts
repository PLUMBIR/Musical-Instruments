import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})

export class BodyComponent implements AfterViewInit {
  ngAfterViewInit() {
    const keys = document.querySelectorAll('.key');
    const note = document.querySelector('.nowplaying')!;
    const hints = document.querySelectorAll('.hints');

    function playNote(e: KeyboardEvent) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) as HTMLAudioElement;
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

      if (!key) return;

      const keyNote = key.getAttribute('data-note')!;

      key.classList.add('playing');
      note.innerHTML = keyNote;
      audio.currentTime = 0;
      audio.play();
    }

    function removeTransition(e: TransitionEvent) {
      if (e.propertyName !== 'transform') return;
      (e.target as HTMLElement).classList.remove('playing');
    }

    function hintsOn(e: HTMLElement, index: number) {
      e.style.transitionDelay = `${index * 50}ms`;
    }

    hints.forEach((hint, index) => hintsOn(hint as HTMLElement, index));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition as EventListener));
    window.addEventListener('keydown', playNote);
  }
}
