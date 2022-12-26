import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { BookhotelsComponent } from './pages/bookhotels/bookhotels.component';
import { HotelComponent } from './pages/hotel/hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    PackagesComponent,
  
    BookhotelsComponent,
        HotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
