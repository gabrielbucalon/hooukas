import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MessageComponent } from './message/message.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProductsService } from './services/products/products.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [CardComponent, MessageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSnackBarModule,
    AngularFireDatabaseModule
  ],
  providers: [
    ProductsService
  ],
  exports: [CardComponent, MessageComponent]
})
export class SharedModule { }
