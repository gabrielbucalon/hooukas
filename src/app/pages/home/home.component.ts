import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditComponent } from '../products/create-edit/create-edit.component';
import { ProductsService } from '@/shared/services/products/products.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any;
  constructor(public dialog: MatDialog, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productsService.getAllProducts().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(products => {
      debugger;
      this.products = products;
    });
  }

  modalCreateProducts(){
    const dialogRef = this.dialog.open(CreateEditComponent, {
      width: "100vh",
      height: "auto"
    });
  }

}
