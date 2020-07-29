import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, AuthModule],
})
export class PagesModule {}
