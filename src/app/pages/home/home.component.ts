import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditComponent } from '../products/create-edit/create-edit.component';
import { ProductsService } from '@/shared/services/products/products.service';
import { Products } from '@/shared/models/Products';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Array<Products>;
  constructor(public dialog: MatDialog, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

 async getProducts(){
    let product = Array<Products>();
    this.productsService.getAllProducts().subscribe((res: any) => {
      res.docs.forEach(async (element) => {
        product.push(element.data());
      });
      this.products = product;
      console.log(this.products);
    });
  }

  modalCreateProducts(){
    const dialogRef = this.dialog.open(CreateEditComponent, {
      width: "100vh",
      height: "auto"
    });
  }

}
