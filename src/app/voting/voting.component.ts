import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VotingService, DogResponse } from '../voting.service';

interface Log {
  time: Date;
  id: string;
  action: number;
}

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  currentDog: DogResponse;
  messageLog: Log[] = [];
  favoured: boolean;
  isProcessing: boolean;
  search: FormControl = new FormControl("");

  constructor(private voting: VotingService) {
  }

  ngOnInit(): void {
    this.isProcessing = true;
    this.voting.loadNewDog().subscribe( (resp: DogResponse) => {
      this.currentDog = {...resp[0]}
      console.log(this.currentDog)
    }, (err) => {}, () => {this.isProcessing = false});
    this.favoured = false;
  }

  vote(vote: boolean): void {
    this.isProcessing = true;
    console.log("tHe doggy")
    const id = this.currentDog.id;
    this.logAction(+vote)
    this.voting.voteOnId(id, vote).subscribe( (resp) => {});
    this.voting.loadNewDog().subscribe( (resp: DogResponse) => {
      this.currentDog = {...resp[0]}
      
    }, (err) => {}, () => {
      setTimeout(() => {
        this.isProcessing = false; console.log("the complete")
      }, 500);
    });
    this.favoured = false;
  }

  favour(): void {
    const id = this.currentDog.id;
    this.favoured = true;
    this.logAction(2);
    this.voting.makeFavourite(id).subscribe( (resp) => {} );
  }

  logAction(type: number) {
    // 0 - dislike
    // 1 - like
    // 2 - fav
    const now = new Date();
    const log = {time: now, id: this.currentDog.id, action: type};

    this.messageLog.unshift(log);
  }

  switchFolder(type: number) {
    switch (type) {
      case 0:
        return "Dislikes"
      case 1:
        return "Likes"
      case 2:
        return "Favourites"
      default:
        return "Unknown folder"
    }
  }

  switchImage(type: number) {
    switch (type) {
      case 0:
        return "downvote"
      case 1:
        return "upvote"
      case 2:
        return "heart-out"
      default:
        return "Unknown folder"
    }
  }
}
