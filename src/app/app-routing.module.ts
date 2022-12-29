import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { BookhotelsComponent } from './pages/bookhotels/bookhotels.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { HomeuserComponent } from './pages/user/homeuser/homeuser.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { SearchHotelComponent } from './pages/search-hotel/search-hotel.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ViewHotelComponent } from './pages/view-hotel/view-hotel.component'
import { BooklistComponent } from './pages/admin/booklist/booklist.component';
import { NormalGuard } from './services/normal.guard';
import { HotelListComponent } from './pages/admin/hotel-list/hotel-list.component';
import { UserListComponent } from './pages/admin/user-list/user-list.component';
import { FeedListComponent } from './pages/admin/feed-list/feed-list.component';
import { AddHotelComponent } from './pages/admin/add-hotel/add-hotel.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { BookHistoryComponent } from './pages/user/book-history/book-history.component';
import { PaymentHistoryComponent } from './pages/user/payment-history/payment-history.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'search', component: SearchHotelComponent },
  { path: 'view-hotel/:id', component: ViewHotelComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'bookhotel/:id', component: BookhotelsComponent },
  
  {
    path: 'admin', component: DashboardComponent, canActivate: [AdminGuard],
    children: [
      {
        path: '', component: AdminhomeComponent
      },
      {
        path: 'home', component: AdminhomeComponent
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'booking-list', component: BooklistComponent
      },
      {
        path: 'hotel-list', component: HotelListComponent
      },
      {
        path: 'user-list', component: UserListComponent
      },
      {
        path: 'feed-list', component: FeedListComponent
      },
      {
        path: 'add-hotel', component: AddHotelComponent
      }
    ]
  },
  {
    path: 'user-dashboard', component: UserDashboardComponent, canActivate: [NormalGuard],
    children: [
      {
        path: '', redirectTo: 'userhome', pathMatch: 'full'
      },
      {
        path: 'userhome', component: HomeuserComponent
      },
      {
        path: 'profile', component: ProfileComponent
      },
      { path: 'update-profile/:id', component: UpdateProfileComponent },
      {
        path:'history',component:BookHistoryComponent
      },
      {
        path:'pay-history',component:PaymentHistoryComponent
      }

    ],
  },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
