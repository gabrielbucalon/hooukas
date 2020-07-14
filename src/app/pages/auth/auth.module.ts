import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '@/pages/auth/register/register.component';
import { SharedModule } from '@/shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthService } from '@/pages/auth/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AngularFireAuthModule } from 'angularfire2/auth';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
