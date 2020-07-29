import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@/pages/home/home.component';
import { HomeService } from '@/pages/home/services/home-service.service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
