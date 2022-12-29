import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';

import { MatMenuModule } from '@angular/material/menu';
// import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
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
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { SidebarUserComponent } from './pages/user/sidebar-user/sidebar-user.component';
import { HomeuserComponent } from './pages/user/homeuser/homeuser.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthInterceptor, authInterceptorProviders } from './services/auth.interceptor';
import { SearchHotelComponent } from './pages/search-hotel/search-hotel.component';
import { ViewHotelComponent } from './pages/view-hotel/view-hotel.component';
import { BooklistComponent } from './pages/admin/booklist/booklist.component';
import { HotelListComponent } from './pages/admin/hotel-list/hotel-list.component';
import { UserListComponent } from './pages/admin/user-list/user-list.component';
import { FeedListComponent } from './pages/admin/feed-list/feed-list.component';
import { SearchPipe } from './services/search.pipe';
import { AddHotelComponent } from './pages/admin/add-hotel/add-hotel.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { BookHistoryComponent } from './pages/user/book-history/book-history.component';
import { PaymentHistoryComponent } from './pages/user/payment-history/payment-history.component';


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
       DashboardComponent,
       AdminhomeComponent,
       SidebarComponent,
       UserDashboardComponent,
       SidebarUserComponent,
       HomeuserComponent,
       ProfileComponent,
       PaymentComponent,
        SearchHotelComponent,
        ViewHotelComponent,
        BooklistComponent,
        HotelListComponent,
        UserListComponent,
        FeedListComponent,
        SearchPipe,
        AddHotelComponent,
        UpdateProfileComponent,
        BookHistoryComponent,
        PaymentHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
