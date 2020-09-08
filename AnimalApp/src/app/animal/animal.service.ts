import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DogBreed } from './model/dogBreed';
import { Observable } from 'rxjs';
import { DogImage } from './model/dogImage';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseUrl = 'https://api.thedogapi.com/v1';

  constructor(private http: HttpClient) {}

  public GetAll(limit: number, page: number): Observable<DogBreed[]>{

    const params = new HttpParams();
    params.set('limit', limit.toString());
    params.set('page', page.toString());

    return this.http.get<DogBreed[]>(`${this.baseUrl}/breeds`, { params });
  }

  public Get(id: number): Observable<DogBreed>{
    return this.http.get<DogBreed>(`${this.baseUrl}/breeds/${id}`);
  }

  public GetImage(): Observable<DogImage[]>{

    const params = new HttpParams();
    params.set('has_breeds', 'true');
    params.set('order', 'RANDOM');
    params.set('page', '0');
    params.set('limit', '1');

    return this.http.get<DogImage[]>(`${this.baseUrl}/images/search`, { params });
  }
}
