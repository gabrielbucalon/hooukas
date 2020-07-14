import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';




@NgModule({
  declarations: [FooterComponent, MenuComponent],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    FooterComponent, MenuComponent
  ]
})
export class LayoutModule { }
