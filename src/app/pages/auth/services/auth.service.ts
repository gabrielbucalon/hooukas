import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Address, User } from '@/pages/auth/model/User';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, public afAuth: AngularFireAuth, private firestore: AngularFirestore) { }

  signupUser(userParams: User){
    return this.afAuth.auth.createUserWithEmailAndPassword(userParams.email, userParams.password).then(() => {
      return this.afAuth.auth.signInWithEmailAndPassword(userParams.email, userParams.password).then((authUser) => {
        userParams.uid = authUser.user.uid;
        this.saveUserFirebase(userParams);
      });
    });
  }

  saveUserFirebase(user: User){
    return this.firestore.collection('users').add(user);
  }

  getAddress(cep: string): Observable<Address> {
    return this.http.get<Address>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
