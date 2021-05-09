import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Breed } from './breeds/breeds.component';
import { DogResponse } from './voting.service';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(private http: HttpClient) { }

  loadDogs(limit: string="10", order:string="Rand", breed_id:string="", type:string=""): Observable<DogResponse[]> {
    return this.http.get<DogResponse[]>(`https://api.thedogapi.com/v1/images/search?limit=${limit}&order=${order}&breed_id=${breed_id}&mime_types=${type}`);
  }

  loadBreeds() {
    return this.http.get<Breed[]>("https://api.TheDogAPI.com/v1/breeds");
  }
}
