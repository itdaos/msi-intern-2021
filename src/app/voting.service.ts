import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DogResponse {
  breeds: [Breed],
  id: string
  url: string
  width: number
  height: number
  image_id: string;
  value?: number;
  vote_id?: number;
}

export interface Image {
  id: string;
  url: string;
  vote_id?: number;
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

  unvoteOnId(id) {
    return this.http.delete(`https://api.thedogapi.com/v1/votes/${id}`)
  }

  makeFavourite(id: string) {
    return this.http.post("https://api.thedogapi.com/v1/favourites", {image_id: id});
  }

  loadVotes() {
    return this.http.get<DogResponse[]>("https://api.thedogapi.com/v1/votes");
  }

  loadFavourites() {
    return this.http.get<DogResponse[]>("https://api.thedogapi.com/v1/favourites");
  }

  loadImageByID(id: string) {
    return this.http.get<Image>(`https://api.thedogapi.com/v1/images/${id}`);
  }

}
