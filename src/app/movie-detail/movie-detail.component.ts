import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Movie } from '../movie';
import { OmdbService } from './../omdb.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movies: Movie[];

  constructor(private route: ActivatedRoute, private _omdbService: OmdbService) { }

  ngOnInit() {
    const temp = this.getId();
    this._omdbService.getById(temp).then((result) => {
      this.movies = [result];
    });
  }

  getId() {
    let id = 0;
    this.route.params.subscribe((params: Params) => { // subscribe to router event
      id = params['id'];
    });
    return id;
  }
}
