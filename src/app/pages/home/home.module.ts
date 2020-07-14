import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@/pages/home/home.component';
import { HomeService } from '@/pages/home/services/home-service.service';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
