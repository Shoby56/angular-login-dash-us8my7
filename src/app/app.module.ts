import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login/login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { LoginRegisterService } from './login/login-register.service';



@NgModule({
  imports:      [ BrowserModule, FormsModule,
  AngularFireModule.initializeApp({
      apiKey: "AIzaSyA19o7AKKzlHV-QWZGhS6Igo7XYZGOv7yI",
      authDomain: "onlinestorage-aaa0c.firebaseapp.com",
      databaseURL: "https://onlinestorage-aaa0c.firebaseio.com",
      projectId: "onlinestorage-aaa0c",
      storageBucket: "onlinestorage-aaa0c.appspot.com",
      messagingSenderId: "750342715090",
      appId: "1:750342715090:web:61389f9878b4c095f71f0b",
      measurementId: "G-WYMJ4KD3FS"
    }),
    AngularFirestoreModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoginRegisterService]
})
export class AppModule { }
