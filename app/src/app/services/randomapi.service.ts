import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}
 
@Injectable({
  providedIn: 'root'
})
export class RandomApiService {
  url = 'http://www.omdbapi.com/';
  apiKey = '1aeaad5c'; 

  constructor(private http: HttpClient) { }

  searchData(num: number) {
    return this.http.get(`${this.url}?i=tt3286456&apikey=${this.apiKey}`)
    //return this.http.get(`${this.url}?i=tt110${num}1&apikey=${this.apiKey}`)
  }

  getDetails(title: string){
    return this.http.get(`${this.url}?t=${title}&apikey=${this.apiKey}`)
  }
}