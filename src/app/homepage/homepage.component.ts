import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(
    private us: UserService,
    private ds: DataService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  genNewBoard() {
    const randomBoardCode = this.generateUID();
    this.ds.createBoard(randomBoardCode).then((result) => {
      console.log(result);
      this.router.navigateByUrl(randomBoardCode);
    });

  }

  generateUID() {
    const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';

    const ID_LENGTH = 6;

    let rtn = '';
    for (let i = 0; i < ID_LENGTH; i++) {
      rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
  }
}
