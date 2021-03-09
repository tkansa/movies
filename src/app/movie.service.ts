import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  movieUrl: string = 'https://api.themoviedb.org/3/discover/movie?api_key=dbb4511f8917508e5ea2ffb2d6a01db5&sort_by=popularity.desc';
  searchUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=dbb4511f8917508e5ea2ffb2d6a01db5&language=en-US&query=';
  favoritesUrl: string = '/api/favorites';
  public movies: Movie[] = [];
  public favorites : Movie[] = [];

  constructor(private http: HttpClient) { }

  getMovies(searchTerm?: string){

    if(searchTerm){
      console.log(searchTerm)
      this.http.get(this.searchUrl + searchTerm).subscribe(
        (response: any) => {
          this.movies = response.results;
        },
        (error) => console.log(error)
      )
    }
    else {
      this.http.get(this.movieUrl).subscribe(
        (response: any) => {
          this.movies = response.results;
        },
        (error) => console.log(error)
      )
    }
    
    
  }
}
