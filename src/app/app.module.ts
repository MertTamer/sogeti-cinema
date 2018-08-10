import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { OmdbService } from './omdb.service';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FeaturedMoviesComponent } from './featured-movies/featured-movies.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieSearchComponent,
    FeaturedMoviesComponent,
    HomeComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'search-movies', component: MovieSearchComponent },
      { path: 'movie/:id', component: MovieDetailComponent },
      { path: 'featured-movies', component: FeaturedMoviesComponent }
    ])
  ],
  providers: [OmdbService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
