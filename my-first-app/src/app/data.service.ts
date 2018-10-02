import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  movieList: string[]=['Captain America (The First Avenger)', "The Incredible Hulk", "Thor (The Dark World)"];
  getMoviesListFromService():string[]{
    return this.movieList;
  }
  addMoviesToService(newMovie): string[]{
    if(newMovie != ""){
      this.movieList.push(newMovie);
    }
    return this.movieList;
  }
  constructor() { }
}
