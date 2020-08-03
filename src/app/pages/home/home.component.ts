import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditComponent } from '@/pages/products/create-edit/create-edit.component';
import { ProductsService } from '@/shared/services/products/products.service';
import { Products } from '@/shared/models/Products';
import { ITEM } from '@/pages/home/constants/Itens';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Array<Products>;
  card = [];

  price: number;
  priceFixe: Array<number>;

  loading: boolean;

  constructor(public dialog: MatDialog, private productsService: ProductsService) {
    this.loading = false;
    this.price = 0.0;
    this.priceFixe = [];
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
        this.priceFixe.push(Number(product[index].price.toFixed(2)));
      });
      this.products = product;
      this.loading = false;
    });
  }

  modalCreateProducts() {
    const dialogRef = this.dialog.open(CreateEditComponent, {
      width: "100vh",
      height: "auto"
    });
  }

  addOrRemoveItem($event, index: number) {
    if (ITEM.MORE_ONE === $event) {
      this.products[index].price += this.priceFixe[index];
    } else {
      if (Number(this.products[index].price.toFixed(2)) === this.priceFixe[index]) {
        return;
      }else{
        this.products[index].price -= this.priceFixe[index];
      }
    }
  }
}
