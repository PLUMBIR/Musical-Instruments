import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-piano',
  standalone: true,
  imports: [],
  templateUrl: './piano.component.html',
  styleUrl: './piano.component.scss'
})

export class PianoComponent{

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key.toLowerCase();
    this.playNote(key);
  }

  playNote(key: string) {
    const audio = document.querySelector(`audio[data-key="${key.toUpperCase()}"]`) as HTMLAudioElement;
    const keyElement = document.querySelector(`.key[data-key="${key.toUpperCase()}"]`);

    if (!keyElement) return;

    const keyNote = keyElement.getAttribute('data-note')!;
    keyElement.classList.add('playing');
    const note = document.querySelector('.nowplaying')!;
    note.innerHTML = keyNote;
    audio.currentTime = 0;
    audio.play();
  }

  removeTransition(e: TransitionEvent) {
    if (e.propertyName !== 'transform') return;
    (e.target as HTMLElement).classList.remove('playing');
  }

  hintsOn(e: HTMLElement, index: number) {
    e.style.transitionDelay = `${index * 50}ms`;
  }

  ngAfterViewInit() {
    const keys = document.querySelectorAll('.key');
    const hints = document.querySelectorAll('.hints');
    hints.forEach((hint, index) => this.hintsOn(hint as HTMLElement, index));
    keys.forEach(key => key.addEventListener('transitionend', this.removeTransition as EventListener));
  }
}
