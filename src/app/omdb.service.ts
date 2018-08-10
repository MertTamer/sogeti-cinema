import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { ApiConfig } from './api-config';
import { ApiService } from './api.service';

@Injectable()
export class OmdbService {
  constructor(private api: ApiService) { }

  get(name) {
    return this.api.get(`?s=${name}${ApiConfig.apiKey}`);
  }

  getById(id): Promise<Movie> {
    return this.api.getID(`?i=${id}${ApiConfig.apiKey}`);
  }  
}