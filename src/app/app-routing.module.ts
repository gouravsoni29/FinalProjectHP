import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { BookhotelsComponent } from './pages/bookhotels/bookhotels.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeuserComponent } from './pages/user/homeuser/homeuser.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'bookhotel', component: BookhotelsComponent },
  {path:'payment',component:PaymentComponent},
  {
    path: 'admin', component: DashboardComponent,
    children: [
      {
        path: '', component: AdminhomeComponent
      },
      {
        path:'home',component:AdminhomeComponent
      },
    {
      path:'profile',component:ProfileComponent
    }
    ]
  },
  {
    path: 'user-dashboard', component: UserDashboardComponent,
    children: [
      {
        path:'userhome',component:HomeuserComponent
      },
      {
        path:'profile',component:ProfileComponent
      }
    ]
  }
  // {path:'adminhome',component:AdminhomeComponent}
import { SearchHotelComponent } from './pages/search-hotel/search-hotel.component';
import { SignupComponent } from './pages/signup/signup.component';
import{ViewHotelComponent} from './pages/view-hotel/view-hotel.component'
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'boothotel',component:BookhotelsComponent},
  {path: 'search',component:SearchHotelComponent},
  {path: 'view-hotel',component:ViewHotelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
