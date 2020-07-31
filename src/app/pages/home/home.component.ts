import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditComponent } from '../products/create-edit/create-edit.component';
import { ProductsService } from '@/shared/services/products/products.service';


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
    this.productsService.getAllProducts().subscribe((res: any) => {
      res.docs.forEach(element => {
        console.log(element.data());
      });
    });
  }

  modalCreateProducts(){
    const dialogRef = this.dialog.open(CreateEditComponent, {
      width: "100vh",
      height: "auto"
    });
  }

}
