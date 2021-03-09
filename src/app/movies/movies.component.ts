import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

interface Movie {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  searchTerm: string;

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies();
  }

  favorite(movie: Movie){
    this.movieService.favorites.push(movie);

  }
  search(): void {
    this.movieService.getMovies(this.searchTerm);
  }

}

