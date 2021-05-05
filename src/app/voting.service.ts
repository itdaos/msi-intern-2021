import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DogResponse {
  breeds: [Breed],
  id: string
  url: string
  width: number
  height: number
}

interface Breed {
  weight: {
    imperial: string
    metric: string
  }
  height: {
    imperial: string
    metric: string
  }
  id: number
  name: string
  bred_for: string
  breed_group: string
  life_span: string
  temperament: string
  reference_image_id: string
}

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  constructor(private http: HttpClient) { }

  loadNewDog(): Observable<DogResponse> {
    return this.http.get<DogResponse>("https://api.thedogapi.com/v1/images/search");
  }

  voteOnId(id: string, vote: boolean) {
    return this.http.post("https://api.thedogapi.com/v1/votes", {image_id: id, value: vote});
  }

  makeFavourite(id: string) {
    return this.http.post("https://api.thedogapi.com/v1/favourites", {image_id: id});
  }

}
