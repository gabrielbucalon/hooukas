import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Address } from '../model/User';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient,
    public auth: AngularFireAuth
    ) {}

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
    return this.auth.signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
