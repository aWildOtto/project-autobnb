import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface sortOption {
  optName: string;
  optValue: string;
}
export interface boardListing {
  owner: string;
  name: string;
  address: string;
  pictures: string;
  location: string;
  upvotes: number;
  downvotes: number;
  comments: string;
}
@Component({
  selector: 'app-boardpage',
  templateUrl: './boardpage.component.html',
  styleUrls: ['./boardpage.component.scss']
})
export class BoardpageComponent implements OnInit {
  projName = 'Board Title';
  projDesc = 'Board Description';
  sortOptions: sortOption[] =
  [{ optName: 'Price', optValue: 'price' },
    { optName: 'Name', optValue: 'name' }];

  options: boardListing[] = [
    {
      owner: 'test',
      name: 'string',
      address: 'string',
      pictures: 'string',
      location: 'string',
      upvotes: 1,
      downvotes: 2,
      comments: 'sample'
    },
    {
      owner: 'test2',
      name: 'string',
      address: 'string',
      pictures: 'string',
      location: 'string',
      upvotes: 1,
      downvotes: 2,
      comments: 'sample'
    }
  ];

  name = new FormControl('');


  constructor() { }

  ngOnInit() {
  }

}
