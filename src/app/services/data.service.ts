import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Option } from '../models/options';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Options: AngularFirestoreCollection<Option>;
  Board: AngularFirestoreCollection<Option>;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.Board = this.db.collection('board');
  }

  getOptionsByBoardID(boardId: string): Observable<Option> {
    return this.Options.doc<Option>(boardId).valueChanges();
  }

  createBoard(uid: string): Promise<any> {
    return this.Board.doc(uid).set({ boardName: 'Untitled AirBnB plan' });
  }
}
