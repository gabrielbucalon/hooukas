import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Products } from '@/shared/models/Products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private dbPath: string = "products";
  productsRef: AngularFireList<Products> = null;
  constructor(private firestore: AngularFirestore, private db: AngularFireDatabase) {
   this.productsRef = db.list(this.dbPath);
  }


  addProduct(){

  }

  removeProduct(){

  }

  updateProduct(){

  }

  getAllProducts(): AngularFireList<Products>{
    console.log(this.productsRef);
    return this.productsRef;
  }

  getByIdProduct(){

  }
}
