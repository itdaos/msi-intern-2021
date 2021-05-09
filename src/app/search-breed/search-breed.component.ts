import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { BreedsService } from '../breeds.service';
import { Breed } from '../breeds/breeds.component';
import { DogResponse, VotingService, Image } from '../voting.service';

@Component({
  selector: 'app-search-breed',
  templateUrl: './search-breed.component.html',
  styleUrls: ['./search-breed.component.scss']
})
export class SearchBreedComponent implements OnInit {
  fetchedDogs: DogResponse[] = [];
  fetchedBreeds: Array<Image>= [];
  name: string;
  search: FormControl = new FormControl("");

  constructor(private breeds: BreedsService, private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.active.snapshot.paramMap.get('name');
    this.breeds.searchByName(this.name).pipe(
      concatMap((breeds: Breed[]) => of(...breeds)),
      concatMap((breed: Breed) => this.breeds.loadImageByBreed(breed.id))
    ).subscribe(
      (resp) => {
        this.fetchedBreeds.push(resp[0]);
        console.log(resp);
      }
    );

  }

}
