import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookhotelsComponent } from './pages/bookhotels/bookhotels.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
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
