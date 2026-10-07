import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameCard } from '../../components/game-card/game-card';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    GameCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  // =========================================
  // FEATURED GAMES
  // =========================================

  featuredGames = [
    {
      id: 'cyberpunk-2077',
      title: 'Cyberpunk 2077',
      category: 'Action RPG',
      rating: 4.8,
      price: '$39.99',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e'
    },
    {
      id: 'the-witcher',
      title: 'The Witcher',
      category: 'RPG',
      rating: 4.9,
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420'
    },
    {
      id: 'racing-legends',
      title: 'Racing Legends',
      category: 'Racing',
      rating: 4.7,
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d'
    },
    {
      id: 'battle-arena',
      title: 'Battle Arena',
      category: 'Action',
      rating: 4.6,
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f'
    }
  ];


  // =========================================
  // TRENDING GAMES
  // =========================================

  trendingGames = [
    {
      id: 'ghost-runner',
      title: 'Ghost Runner',
      category: 'Action',
      rating: 4.8,
      price: '$34.99',
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1'
    },
    {
      id: 'dark-souls',
      title: 'Dark Souls',
      category: 'Adventure',
      rating: 4.9,
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8'
    },
    {
      id: 'space-journey',
      title: 'Space Journey',
      category: 'Sci-Fi',
      rating: 4.7,
      price: '$39.99',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa'
    },
    {
      id: 'football-pro',
      title: 'Football Pro',
      category: 'Sports',
      rating: 4.6,
      price: '$49.99',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55'
    }
  ];


  // =========================================
  // NEW RELEASES
  // =========================================

  newReleases = [
    {
      id: 'neon-horizon',
      title: 'Neon Horizon',
      category: 'Sci-Fi',
      rating: 4.9,
      price: '$44.99',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420'
    },
    {
      id: 'shadow-warrior',
      title: 'Shadow Warrior',
      category: 'Action',
      rating: 4.8,
      price: '$39.99',
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1'
    },
    {
      id: 'velocity-x',
      title: 'Velocity X',
      category: 'Racing',
      rating: 4.7,
      price: '$34.99',
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d'
    },
    {
      id: 'galaxy-quest',
      title: 'Galaxy Quest',
      category: 'Adventure',
      rating: 4.8,
      price: '$42.99',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa'
    }
  ];
}