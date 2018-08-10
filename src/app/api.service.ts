import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiConfig } from './api-config';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor (private http: Http) { }

  get(path: string) {
    return this.http
      .get([ApiConfig.baseUrl, path].join('/'))
      .pipe(map((res) => res.json().Search || []));
  }

  getID(id: string): Promise<any> {
    return this.http
      .get([ApiConfig.baseUrl, id].join('/'))
      .pipe(map((res) => res.json()))
      .toPromise();
  }
}