import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Address } from '@/pages/auth/model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAddress(cep: string): Observable<Address> {
    return this.http.get<Address>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
