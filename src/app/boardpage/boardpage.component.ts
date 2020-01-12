import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';
import { Board } from '../models';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

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

  urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  addListForm = this.formBuilder.group({
    addListing: [null, Validators.required, Validators.pattern(this.urlRegex)]
  });

  boardData: Observable<Board>;
  constructor(
    private us: UserService,
    private ds: DataService,
    private activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.activeRoute.params.subscribe((url) => {
      console.log(url);
      this.boardData = this.ds.getBoardByID(url.id);
      this.boardData.subscribe((data) => {
        console.log(data);
      });
    });
  }

  ngOnInit() {

  }

  submitForm() {

  }

}
