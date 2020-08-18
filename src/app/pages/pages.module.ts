import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@/shared/shared.module';
import { AuthModule } from '@/pages/auth/auth.module';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { CartComponent } from './cart/cart.component';
import { ConfigUserComponent } from './config-user/config-user.component';

@NgModule({
  declarations: [CartComponent, ConfigUserComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthModule,
    HomeModule,
    ProductsModule
  ]
})
export class PagesModule { }
