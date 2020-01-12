import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { boardListing } from '../boardpage/boardpage.component';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent implements OnInit {
  @Input() listing: boardListing;
  hasVoted = 0 ;
  // upColor = 'green';
  // downColor = 'green';

  constructor() { }

  ngOnInit() {
  }

  // changeButtonColor() {
  //   switch (this.hasVoted) {
  //     case 0: {
  //       this.upColor = 'red';
  //       break;
  //     }
  //     case 1: {
  //       this.upColor = 'green';
  //       break;
  //     }

  //   }
  // }

  upvote() {
    if (this.hasVoted === 0) {
      this.listing.upvotes++;
      this.hasVoted = 1;

    } else if (this.hasVoted) {
      this.hasVoted = 0;
      this.listing.upvotes--;
    }
  }

  downvote() {
    if (this.hasVoted === 0) {
      this.listing.downvotes++;
      this.hasVoted = 1;

    } else if (!this.hasVoted) {
      this.hasVoted = 0;
      this.listing.downvotes--;
    }
  }
}
