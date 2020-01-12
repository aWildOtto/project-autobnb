import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-boardpage',
  templateUrl: './boardpage.component.html',
  styleUrls: ['./boardpage.component.scss']
})
export class BoardpageComponent implements OnInit {

  constructor(private us: UserService) { }

  ngOnInit() {
  }

}
