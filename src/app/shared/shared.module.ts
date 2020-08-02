import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MessageComponent } from './message/message.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductsService } from './services/products/products.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';



@NgModule({
  declarations: [
    CardComponent,
    MessageComponent,
    CarouselComponent,
    ButtonToggleComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSnackBarModule,
    AngularFireDatabaseModule,
    NgbModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule
  ],
  providers: [
    ProductsService
  ],
  exports: [
    CardComponent,
    MessageComponent,
    CarouselComponent,
    ButtonToggleComponent
  ]
})
export class SharedModule { }
