import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Address, User } from '@/pages/auth/model/User';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, public afAuth: AngularFireAuth) { }

  signupUser(userParams: User){
    return this.afAuth.auth.createUserWithEmailAndPassword(userParams.email, userParams.password).then((newUser) => {
      return this.afAuth.auth.signInWithEmailAndPassword(userParams.email, userParams.password).then((authUser) => {
        let uid = authUser.user.uid;

        let user = {
          uid: uid,
          name: userParams.name,
          email: userParams.email,
          address: userParams.address
        }

        newUser.user.updateProfile({
          displayName: user.name,
          photoURL: "", // por enquanto fica assim;
        });


      });
    });
  }

  getAddress(cep: string): Observable<Address> {
    return this.http.get<Address>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
