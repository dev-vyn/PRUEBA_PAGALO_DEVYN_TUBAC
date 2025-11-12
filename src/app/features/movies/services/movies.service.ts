import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getMovies(page = 1, query?: string, startDate?: string, endDate?: string): Observable<any> {
    let params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', 'es-ES')
      .set('page', page);

    if (query && (startDate || endDate)) {
      params = params
        .set('sort_by', 'primary_release_date.desc')
        .set('include_adult', false)
        .set('with_keywords', query)
        .set('primary_release_date.gte', startDate || '1900-01-01')
        .set('primary_release_date.lte', endDate || new Date().toISOString().split('T')[0]);

      return this.http.get(`${this.apiUrl}/discover/movie`, { params });
    }

    if (query) {
      params = params.set('query', query);
      return this.http.get(`${this.apiUrl}/search/movie`, { params });
    }

    if (startDate || endDate) {
      params = params
        .set('sort_by', 'primary_release_date.desc')
        .set('primary_release_date.gte', startDate || '1900-01-01')
        .set('primary_release_date.lte', endDate || new Date().toISOString().split('T')[0]);
      return this.http.get(`${this.apiUrl}/discover/movie`, { params });
    }

    return this.http.get(`${this.apiUrl}/movie/now_playing`, { params });
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&language=es-ES`);
  }
}
