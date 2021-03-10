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
  
  movieUrl: string = 'https://api.themoviedb.org/3/discover/movie?api_key=*&sort_by=popularity.desc';
  searchUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=*&language=en-US&query=';
  favoritesUrl: string = 'http://localhost:3000/api/favorites';
  public movies: Movie[] = [];
  public favorites : Movie[] = [];

  constructor(private http: HttpClient) { }

  getMovies(searchTerm?: string){

    if(searchTerm){
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

  addFavorite(movie: Movie): void {
    this.http.post(this.favoritesUrl, movie).subscribe(data => {
      //console.log(data)
    });
  }

  getFavorites():void {
    this.http.get(this.favoritesUrl).subscribe(
      (response: any) => {
      
      for(let result of response){
        let movie: Movie = { title: ""};
        movie.title = result.title;
        movie.poster_path = result.poster_path;
        this.favorites.push(movie);
      }
    },
    error => console.log(error)
    )
  }
}
