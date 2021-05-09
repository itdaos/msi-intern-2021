import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BreedsService } from '../breeds.service';
import { DogResponse, VotingService } from '../voting.service';

export interface Breed {
  id: string;
  name: string;
  temperament: string;
  life_span: string;
  alt_names: string;
  wikipedia_url: string;
  origin: string;
  country_code: string;
  bred_for: string;
  breed_group: string;
  image?: {
    id: string;
    height: number;
    width: number;
    url:string;
  }
  weight: {
    metric: string;
    imperial: string;
  }
  height: {
    metric: string;
    imperial: string;
  }
}

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit {
  fetchedDogs: DogResponse[] = [];
  fetchedBreeds: Array<Breed>= [];
  limit: FormControl = new FormControl("10");
  breed: FormControl = new FormControl(""); 
  sortBy: string = "Rand";
  favoured: string[] = [];
  search: FormControl = new FormControl("");

  constructor(private breeds: BreedsService, private voting: VotingService) { }

  ngOnInit(): void {
    this.breeds.loadDogs(this.limit.value, this.sortBy, this.breed.value).subscribe( (resp) => {this.fetchedDogs=resp; console.log(resp)} );
    this.breeds.loadBreeds().subscribe( (resp) => {
      this.fetchedBreeds=resp;
    });
  }

  onChange(): void {
    this.breeds.loadDogs(this.limit.value, this.sortBy, this.breed.value).subscribe( (resp) => {this.fetchedDogs=resp});
  }

  clickUp(): void {
    if (this.sortBy == "ASC") {
      this.sortBy = "Rand";
    } else {
      this.sortBy = "ASC"
    }
    this.onChange();
  }

  clickDown(): void {
    if (this.sortBy == "DESC") {
      this.sortBy = "Rand";
    } else {
      this.sortBy = "DESC"
    }
    this.onChange();
  }

  favourById(id: string): void {
    if (!this.favoured.includes(id)) {
      this.favoured.push(id);
      this.voting.makeFavourite(id).subscribe( () => {});
    }
  }

}
