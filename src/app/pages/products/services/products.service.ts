import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  path: string = "products";
  productsRef: AngularFireList<any> = null;

  constructor(private db: AngularFireDatabase, private firestore: AngularFirestore) {
    this.productsRef = db.list(this.path);
  }

  createProduct(produto): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection(this.path)
        .add(produto).then((res => {
          console.log(res);
        }));
    });
  }

  getAll() {
    return this.firestore.collection(this.path).snapshotChanges();
  }
}
