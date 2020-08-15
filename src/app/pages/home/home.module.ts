import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@/pages/home/home.component';
import { HomeService } from '@/pages/home/services/home-service.service';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '@/shared/shared.module';
import {  MatDividerModule } from '@angular/material/divider';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import {  MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    SharedModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
