import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {

  searchQuery = '';

}