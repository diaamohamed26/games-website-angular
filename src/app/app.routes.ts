import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Games } from './pages/games/games';
import { GameDetails } from './pages/game-details/game-details';

import { Search } from './pages/search/search';
import { Favorites } from './pages/favorites/favorites';
import { Login } from './pages/login/login';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'games',
    component: Games
  },

  {
    path: 'games/:id',
    component: GameDetails
  },

  {
    path: 'search',
    component: Search
  },

  {
    path: 'favorites',
    component: Favorites
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: '**',
    redirectTo: ''
  }

];