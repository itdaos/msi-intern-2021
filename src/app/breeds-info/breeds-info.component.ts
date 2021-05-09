import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BreedsService } from '../breeds.service';
import { Breed } from '../breeds/breeds.component';
import { DogResponse, VotingService } from '../voting.service';

@Component({
  selector: 'app-breeds-info',
  templateUrl: './breeds-info.component.html',
  styleUrls: ['./breeds-info.component.scss']
})
export class BreedsInfoComponent implements OnInit {
  breedToShow: Breed = null;
  id: string;
  search: FormControl = new FormControl("");

  constructor(private breeds: BreedsService, private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.active.snapshot.paramMap.get('id');
    this.breeds.loadBreeds().subscribe( (resp) => {
      this.breedToShow = resp.find(elem => elem.id == this.id);
      console.log(this.breedToShow);
    });
  }


}
