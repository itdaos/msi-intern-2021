import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { concatMap, filter, map } from 'rxjs/operators';
import { BreedsService } from '../breeds.service';
import { Breed } from '../breeds/breeds.component';
import { ImagesService } from '../images.service';
import { DogResponse, VotingService, Image } from '../voting.service';

@Component({
  selector: 'app-favours',
  templateUrl: './favours.component.html',
  styleUrls: ['./favours.component.scss']
})
export class FavoursComponent implements OnInit {
  fetchedDogs: Array<Image> = [];
  search: FormControl = new FormControl("");

  constructor(private voting: VotingService) { }

  ngOnInit(): void {
    this.fetchDogsFromApi();
  }

  unVote(id) {
    console.log(id, this.fetchedDogs);
    const index = this.fetchedDogs.map(function(el) {
      return el.id;
    }).indexOf(id);
    this.fetchedDogs.splice(index, 1);
    this.voting.unvoteOnId(id).subscribe((res) => {console.log(res)});
  }

  fetchDogsFromApi(): void {
    
    this.voting.loadFavourites().pipe(
      concatMap((res: DogResponse[]) => {
        let dog$: Observable<DogResponse> = of(...res);
        return dog$;
      }),
      concatMap((dog: any) => {
        return this.voting.loadImageByID(dog.image_id).pipe(
          map((doge) => {
            return {vote_id:dog.id, ...doge}
          })
        );
      })
    ).subscribe(
      (resp) => {
        this.fetchedDogs.push(resp);
      }
    );
  }
}
