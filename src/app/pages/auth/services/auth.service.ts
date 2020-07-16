import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Address, User } from '@/pages/auth/model/User';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, public afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  async signupUser(userParams: User, email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((authUser) => {
        userParams.uid = authUser.user.uid;
        this.saveUser(userParams);
      });
    });
  }

  async saveUser(user: User) {
    return this.firestore.collection('users').add(user).then(() => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    });
  }


  getUser(): Observable<any> {
    return this.firestore.collection('users').snapshotChanges();
  }

  deleteUser(user: User) {
    delete user.uid;
    this.firestore.doc('policies/' + user.uid).update(user);
  }


  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  getAddress(cep: string): Observable<Address> {
    return this.http.get<Address>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
