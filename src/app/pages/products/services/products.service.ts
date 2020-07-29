import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  path: string = "products";
  productsRef: AngularFireList<any> = null;

  constructor( private db: AngularFireDatabase) {
    this.productsRef = db.list(this.path);
  }

  createProduct(produto){
    this.db.list(this.path).push(produto).then((result: any) => {
      console.log(result.key);
    });
  }

  getAll(){}
}
