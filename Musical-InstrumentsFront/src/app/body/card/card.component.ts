import { Component, input } from '@angular/core';
import { GuitarModel } from '../../models/guitarModel';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  card = input.required<GuitarModel>();
}
