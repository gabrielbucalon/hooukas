import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './pages/auth/auth.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomeModule } from './pages/home/home.module';


export const firebaseConfig = {
  apiKey: "AIzaSyCG1WzfbvZMMOUNGfUK6ISOY6NAfd06Cfw",
  authDomain: "hooukas-48823.firebaseapp.com",
  databaseURL: "https://hooukas-48823.firebaseio.com",
  projectId: "hooukas-48823",
  storageBucket: "hooukas-48823.appspot.com",
  messagingSenderId: "261288853888",
  appId: "1:261288853888:web:b6940185c9d4f2d0e88165",
  measurementId: "G-JRB1QK08K1"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
