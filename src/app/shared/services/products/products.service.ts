import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private dbPath: string = "products";
  productsRef: AngularFireList<any> = null;
  constructor(private firestore: AngularFirestore, private db: AngularFireDatabase) {
   this.productsRef = db.list(this.dbPath);
  }


  addProduct(){

  }

  removeProduct(){

  }

  updateProduct(){

  }

  getAllProducts(): Observable<any>{
    return this.firestore.collection(this.dbPath).get();
  }

  getByIdProduct(){

  }
}
