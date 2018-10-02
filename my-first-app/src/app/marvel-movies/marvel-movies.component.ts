import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";


@Component({
  selector: 'app-marvel-movies',
  templateUrl: './marvel-movies.component.html',
  styleUrls: ['./marvel-movies.component.css'],

  providers: [DataService]
})
export class MarvelMoviesComponent implements OnInit {

  movieList: string[];
  movieListButtonName: string = "Show Movies";
  isMoviesHidden:boolean =  false;

  constructor(private dataService: DataService) { }

  changeButtonProperties(){
    this.isMoviesHidden =  !this.isMoviesHidden;
    this.movieListButtonName = (this.isMoviesHidden) ? "Hide Movies" : "Show Movies";
  }
  getMovies(){
    this.changeButtonProperties();
    this.movieList =  this.dataService.getMoviesListFromService();
  }
  addMovie(form: any){
    console.log(form.value.movieName);
    this.dataService.addMoviesToService(form.value.movieName);
  }
  ngOnInit() {
  }

}
