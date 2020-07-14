import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [FooterComponent, MenuComponent, MainComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
