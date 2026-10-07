import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.html',
  styleUrl: './game-card.scss'
})
export class GameCard {

  @Input() title = 'Cyberpunk 2077';

  @Input()
  image =
    'https://images.unsplash.com/photo-1542751371-adc38448a05e';

  @Input() category = 'Action RPG';

  @Input() rating = 4.8;

  @Input() price = '$39.99';
}