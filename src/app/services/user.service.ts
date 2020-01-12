import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User as FirebaseUser, UserCredential } from '@firebase/auth-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authState: FirebaseUser = null;

  constructor(
    private afAuth: AngularFireAuth,
  ) {
    this.anonymousLogin();
  }
  get currentUserObservable(): Observable<FirebaseUser> {
    return this.afAuth.authState;
  }


  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then((res: UserCredential) => {
        this.authState = res.user;
        console.log(res);
      });
  }

}
