import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { CartComponent } from './cart/cart.component';




@NgModule({
  declarations: [FooterComponent, MenuComponent, CartComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    FooterComponent, MenuComponent
  ]
})
export class LayoutModule { }
