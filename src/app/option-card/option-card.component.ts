import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { boardListing } from '../boardpage/boardpage.component';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent implements OnInit {
  @Input() listing: boardListing;

  constructor() { }

  ngOnInit() {
  }

}
