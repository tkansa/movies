import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(public movieService: MovieService) { }

  searchTerm: string;
  ngOnInit(): void {
  }
  search(){
    this.movieService.searchFavorites(this.searchTerm);
  }

}
