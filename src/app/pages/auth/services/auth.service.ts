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
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    public auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  /**
   * Realiza o login após o registro de usuário
   * @param userParams Informações do usuário após o registro. Ex(Endereço, id...).
   * @param email E-Mail de cadastro do usuário.
   * @param password Senha do usuário.
   */
  async signInUser(userParams: User, email: string, password: string) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        return this.auth
          .signInWithEmailAndPassword(email, password)
          .then((authUser) => {
            userParams.uid = authUser.user.uid;
            this.saveUser(userParams);
          });
      });
  }

  /**
   * 
   * @param user Informações usadas no cadastro do usuário.
   */
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

  /**
   * Retorna informações sobre o endereço baseado no CEP informado.
   * @param cep Número do CEP fornecido pelo usuário
   */
  getAddress(cep: string): Observable<Address> {
    return this.http.get<Address>(`https://viacep.com.br/ws/${cep}/json/`);
  }

  /**
   * Realiza o login via plataformas: E-Mail, Google, Facebook
   * @param type Plataforma usada para realizar o login
   */
  loginPlatforms(type: string) {
    console.log(type);

    switch (type) {
      case 'google':
        return this.AuthLogin(new auth.GoogleAuthProvider());
        break;

      case 'facebook':
        return this.AuthLogin(new auth.FacebookAuthProvider());
        break;

      case 'email':
        return this.AuthLogin(new auth.EmailAuthProvider());

        break;

      default:
        break;
    }
  }

  /**
   * Abre o modal de login usando a plataforma selecionada
   * @param provider Provider de autenticação, de acordo com a plataforma escolhida
   */
  AuthLogin(provider) {
    return this.auth
      .signInWithPopup(provider)
      .then((result) => {

        const userValue: User = {
          email: result.additionalUserInfo.profile['email'],
          name: result.additionalUserInfo.profile['name'],
          uid: ''
        }

        this.saveUser(userValue)
        console.log('Logado!', result);
        this.router.navigateByUrl('');
      })
      .catch((error) => {
        console.log(error);
      });

  }

  /**
   * Retorna os valores do user
   */
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /**
   * Realiza o login de um usuário já cadastrado
   * @param username Username do usuário
   * @param password Senha do usuário
   */
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

  /**
   * Realiza o logout do usuário
   */
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
