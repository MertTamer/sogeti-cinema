import { OmdbService } from './../omdb.service';
import {Component, OnInit} from '@angular/core';
import {Movie} from '../movie';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movies: Observable<Array<Movie>>;
  search = new FormControl;
  error = '';

  constructor(private _omdbService: OmdbService) {}

  ngOnInit() {
    this.movies = this.search.valueChanges
      .debounceTime(1)
      .distinctUntilChanged()
      .switchMap(search => this._omdbService.get(search))
      .catch(error => this.error = error );
  }
}
