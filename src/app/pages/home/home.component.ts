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
  card = [];

  loading: boolean;

  constructor(public dialog: MatDialog, private productsService: ProductsService) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    this.loading = true;
    let product = Array<Products>();
    this.productsService.getAllProducts().subscribe((res: any) => {
      res.docs.forEach((element: Products, index: number) => {
        product.push(element.data());
        this.card.push({
          title: product[index].title,
          style: { backgroundColor: "#FFFFFF", margin: "1em" },
          actions: { cupom: product[index].cupomForm.codeCupom, priceDiscount: product[index].cupomForm.priceDiscount }
        });
      });
      this.products = product;
      console.log(product)
      this.loading = false;
    });
  }

  modalCreateProducts() {
    const dialogRef = this.dialog.open(CreateEditComponent, {
      width: "100vh",
      height: "auto"
    });
  }
}
