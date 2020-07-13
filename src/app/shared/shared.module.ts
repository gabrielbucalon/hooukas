import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MessageComponent } from './message/message.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [CardComponent, MessageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports: [CardComponent, MessageComponent]
})
export class SharedModule { }
