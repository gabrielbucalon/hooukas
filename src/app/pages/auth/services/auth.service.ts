import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { Address } from '../model/User';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Address, User } from '@/pages/auth/model/User';
// import { AngularFireAuth2 } from 'angularfire2/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // constructor(private http: HttpClient,
  //   public auth: AngularFireAuth
  //   ) {}

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    public auth: AngularFireAuth,
    // public afAuth: AngularFireAuth2,
    private firestore: AngularFirestore,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // async signupUser(userParams: User, email: string, password: string) {
  //   return this.afAuth.auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(() => {
  //       return this.afAuth.auth
  //         .signInWithEmailAndPassword(email, password)
  //         .then((authUser) => {
  //           userParams.uid = authUser.user.uid;
  //           this.saveUser(userParams);
  //         });
  //     });
  // }

  async saveUser(user: User) {
    return this.firestore
      .collection('users')
      .add(user)
      .then(() => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.router.navigateByUrl('/');
      });
  }

  getUser(): Observable<any> {
    return this.firestore.collection('users').snapshotChanges();
  }

  deleteUser(user: User) {
    delete user.uid;
    this.firestore.doc('policies/' + user.uid).update(user);
  }

  getAddress(cep: string): Observable<Address> {
    return this.http.get<Address>(`https://viacep.com.br/ws/${cep}/json/`);
  }

  loginPlatforms(type: string) {
    switch (type) {
      case 'google':
        return this.AuthLogin(new auth.GoogleAuthProvider());
        break;

      case 'facebook':
        return this.AuthLogin(new auth.FacebookAuthProvider());

        break;

      default:
        break;
    }
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    // return this.auth
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     console.log('You have been successfully logged in!');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //////////////////////////////////////////////////////////////////////////
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`/users/authenticate`, { username, password })
      .pipe(
        map((user) => {
          user.authdata = window.btoa(username + ':' + password);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
