import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Board } from '../models';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Board: AngularFirestoreCollection<Board>;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.Board = this.db.collection('board');
  }

  getBoardByID(boardId: string): Observable<Board> {
    return this.Board.doc<Board>(boardId).valueChanges();
  }

  createBoard(uid: string): Promise<any> {
    return this.Board.doc(uid).set({ boardName: 'Untitled AirBnB plan' });
  }
}
