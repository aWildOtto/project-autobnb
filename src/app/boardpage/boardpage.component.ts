import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';
import { Board } from '../models';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-boardpage',
  templateUrl: './boardpage.component.html',
  styleUrls: ['./boardpage.component.scss']
})
export class BoardpageComponent implements OnInit {
  projName = '';
  boardData: Observable<Board>;
  constructor(
    private us: UserService,
    private ds: DataService,
    private activeRoute: ActivatedRoute
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

}
