import { Component } from "@angular/core";
import {MovieService} from "../movie.service";

import { Movie } from "../movie";
@Component({
    selector : 'movies',
    templateUrl : 'movies.component.html'    
})

export class MoviesComponent{
    title = 'movies list'
    movies :Movie[];
    selectedMovie: Movie;

    constructor(private movieService : MovieService){}

    ngOnInit(): void{

        this.getMovies();
    }

    onSelect(movie: Movie) : void {
        this.selectedMovie = movie;
    }

    getMovies():void{
     this.movieService.getMovies()
                        .subscribe(movies=>{
                            this.movies=movies;
                        });
    }

}

