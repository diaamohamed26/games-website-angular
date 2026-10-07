import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-details',
  imports: [
    RouterLink
  ],
  templateUrl: './game-details.html',
  styleUrl: './game-details.scss'
})
export class GameDetails {

  game: any;

  games = [
    {
      id: 'cyberpunk-2077',
      title: 'Cyberpunk 2077',
      category: 'Action RPG',
      rating: 4.8,
      reviews: '24.5K',
      price: '$39.99',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
      releaseDate: 'December 10, 2020',
      developer: 'CD Projekt Red',
      publisher: 'CD Projekt',
      platform: 'PC, PlayStation, Xbox',
      description:
        'Cyberpunk 2077 is an open-world action RPG set in the futuristic Night City. Build your character, explore a massive world, complete challenging missions, and shape your own story.'
    },
    {
      id: 'the-witcher',
      title: 'The Witcher',
      category: 'RPG',
      rating: 4.9,
      reviews: '31.2K',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420',
      releaseDate: 'May 19, 2015',
      developer: 'CD Projekt Red',
      publisher: 'CD Projekt',
      platform: 'PC, PlayStation, Xbox',
      description:
        'Enter a dark fantasy world filled with monsters, dangerous choices, unforgettable characters, and an enormous open-world adventure.'
    },
    {
      id: 'racing-legends',
      title: 'Racing Legends',
      category: 'Racing',
      rating: 4.7,
      reviews: '18.7K',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d',
      releaseDate: 'March 15, 2026',
      developer: 'Velocity Studios',
      publisher: 'Velocity Games',
      platform: 'PC, PlayStation, Xbox',
      description:
        'Experience high-speed racing, legendary cars, competitive multiplayer, and dynamic tracks designed for racing fans.'
    },
    {
      id: 'battle-arena',
      title: 'Battle Arena',
      category: 'Action',
      rating: 4.6,
      reviews: '12.4K',
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
      releaseDate: 'January 22, 2026',
      developer: 'Arena Studios',
      publisher: 'Arena Games',
      platform: 'PC, PlayStation, Xbox',
      description:
        'Join intense battles and compete against players in fast-paced arenas filled with strategy, action, and competitive gameplay.'
    },
    {
      id: 'ghost-runner',
      title: 'Ghost Runner',
      category: 'Action',
      rating: 4.8,
      reviews: '19.8K',
      price: '$34.99',
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1',
      releaseDate: 'October 5, 2025',
      developer: 'One More Level',
      publisher: '505 Games',
      platform: 'PC, PlayStation, Xbox',
      description:
        'Master lightning-fast movement and intense combat in a futuristic world where every second matters.'
    },
    {
      id: 'dark-souls',
      title: 'Dark Souls',
      category: 'Adventure',
      rating: 4.9,
      reviews: '42.1K',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8',
      releaseDate: 'April 12, 2025',
      developer: 'FromSoftware',
      publisher: 'Bandai Namco',
      platform: 'PC, PlayStation, Xbox',
      description:
        'Prepare yourself for a challenging adventure filled with powerful enemies, mysterious worlds, and unforgettable battles.'
    },
    {
      id: 'space-journey',
      title: 'Space Journey',
      category: 'Sci-Fi',
      rating: 4.7,
      reviews: '16.3K',
      price: '$39.99',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
      releaseDate: 'February 18, 2026',
      developer: 'Galaxy Studios',
      publisher: 'Galaxy Games',
      platform: 'PC, PlayStation, Xbox',
      description:
        'Explore distant planets, discover unknown civilizations, and uncover the secrets of a mysterious galaxy.'
    },
    {
      id: 'football-pro',
      title: 'Football Pro',
      category: 'Sports',
      rating: 4.6,
      reviews: '21.9K',
      price: '$49.99',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55',
      releaseDate: 'September 20, 2025',
      developer: 'Sports Interactive',
      publisher: 'Sports Games',
      platform: 'PC, PlayStation, Xbox',
      description:
        'Build your dream team, compete in exciting tournaments, and experience realistic football gameplay.'
    }
  ];

  constructor(
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    this.game = this.games.find(
      game => game.id === id
    );
  }
}