import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameCard } from '../../components/game-card/game-card';

@Component({
  selector: 'app-games',
  imports: [
    RouterLink,
    GameCard
  ],
  templateUrl: './games.html',
  styleUrl: './games.scss'
})
export class Games {

  selectedCategory = 'All';

  categories = [
    'All',
    'Action',
    'RPG',
    'Racing',
    'Sports',
    'Strategy',
    'Adventure',
    'Sci-Fi'
  ];

  games = [
    {
      id: 'cyberpunk-2077',
      title: 'Cyberpunk 2077',
      category: 'Action',
      genre: 'Action RPG',
      rating: 4.8,
      reviews: '24.5K',
      price: '$39.99',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
      releaseDate: 'December 10, 2020'
    },
    {
      id: 'the-witcher',
      title: 'The Witcher',
      category: 'RPG',
      genre: 'RPG',
      rating: 4.9,
      reviews: '31.2K',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420',
      releaseDate: 'May 19, 2015'
    },
    {
      id: 'racing-legends',
      title: 'Racing Legends',
      category: 'Racing',
      genre: 'Racing',
      rating: 4.7,
      reviews: '18.7K',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d',
      releaseDate: 'March 15, 2026'
    },
    {
      id: 'battle-arena',
      title: 'Battle Arena',
      category: 'Action',
      genre: 'Action',
      rating: 4.6,
      reviews: '12.4K',
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
      releaseDate: 'January 22, 2026'
    },
    {
      id: 'ghost-runner',
      title: 'Ghost Runner',
      category: 'Action',
      genre: 'Action',
      rating: 4.8,
      reviews: '19.8K',
      price: '$34.99',
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1',
      releaseDate: 'October 5, 2025'
    },
    {
      id: 'dark-souls',
      title: 'Dark Souls',
      category: 'Adventure',
      genre: 'Action RPG',
      rating: 4.9,
      reviews: '42.1K',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8',
      releaseDate: 'April 12, 2025'
    },
    {
      id: 'space-journey',
      title: 'Space Journey',
      category: 'Sci-Fi',
      genre: 'Sci-Fi Adventure',
      rating: 4.7,
      reviews: '16.3K',
      price: '$39.99',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
      releaseDate: 'February 18, 2026'
    },
    {
      id: 'football-pro',
      title: 'Football Pro',
      category: 'Sports',
      genre: 'Sports',
      rating: 4.6,
      reviews: '21.9K',
      price: '$49.99',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55',
      releaseDate: 'September 20, 2025'
    }
  ];

  get filteredGames() {
    if (this.selectedCategory === 'All') {
      return this.games;
    }

    return this.games.filter(
      game => game.category === this.selectedCategory
    );
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}