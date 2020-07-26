import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@/shared/shared.module';
import { AuthModule } from '@/pages/auth/auth.module';
import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AuthModule,
    ProductsModule
  ]
})
export class PagesModule { }
