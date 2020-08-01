import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MessageComponent } from './message/message.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProductsService } from './services/products/products.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [CardComponent, MessageComponent, CarouselComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSnackBarModule,
    AngularFireDatabaseModule,
    NgbModule
  ],
  providers: [
    ProductsService
  ],
  exports: [CardComponent, MessageComponent, CarouselComponent]
})
export class SharedModule { }
