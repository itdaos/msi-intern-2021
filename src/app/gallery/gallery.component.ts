import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BreedsService } from '../breeds.service';
import { Breed } from '../breeds/breeds.component';
import { ImagesService } from '../images.service';
import { DogResponse, VotingService } from '../voting.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @ViewChild('message') message: ElementRef;
  fetchedDogs: DogResponse[] = [];
  fetchedBreeds: Array<Breed>= [];
  limit: FormControl = new FormControl("10");
  breed: FormControl = new FormControl(""); 
  sortBy: FormControl = new FormControl("Rand");
  type: FormControl = new FormControl("")
  favoured: string[] = [];
  toBeUploaded: File;
  imageURL: string;
  response: string;
  modal: boolean = false;

  constructor(private breeds: BreedsService, private voting: VotingService, private images: ImagesService) { }

  ngOnInit(): void {
    this.breeds.loadDogs(this.limit.value, this.sortBy.value, this.breed.value).subscribe( (resp) => {this.fetchedDogs=resp} );
    this.breeds.loadBreeds().subscribe( (resp) => {
      this.fetchedBreeds=resp;
    });
  }

  onChange(): void {
    this.breeds.loadDogs(this.limit.value, this.sortBy.value, this.breed.value, this.type.value).subscribe( (resp) => {this.fetchedDogs=resp});
  }

  favourById(id: string): void {
    if (!this.favoured.includes(id)) {
      this.favoured.push(id);
      this.voting.makeFavourite(id).subscribe( () => {});
    }
  }

  fileBrowseHandler(files) {
    this.prepareFile(files);
  }

  prepareFile(files: Array<any>): void {
    this.toBeUploaded = files[0];
    console.log(this.toBeUploaded);
    this.showPreview();
  }

  uploadFile(): void {
    if (!!this.toBeUploaded) {
      const fd: FormData = new FormData();
      fd.append("file", this.toBeUploaded);

      this.images.postImg(fd).subscribe( (resp) => {
        this.response = '1';
        if (resp.approved == 1) {
          this.toBeUploaded = null;
          this.imageURL = ""
        }
      }, (err) => {
        this.response = '0';

      } );
    } else {
      this.message.nativeElement.innerHTML = "No file was loaded ):";
    }
  }

  showPreview() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(this.toBeUploaded)
  }
}
