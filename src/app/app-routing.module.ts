import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { LocationPageComponent } from './Components/location-page/location-page.component';
import { HomeFiltrationContainerComponent } from './Components/home-filtration-container/home-filtration-container.component';
import { PlaceDetailsComponent } from './Components/place-details/place-details.component';
import { InvitationComponent } from './Components/invitation/invitation.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { ContinuedRegisterComponent } from './Components/continued-register/continued-register.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';

const routes: Routes = 
[
  { path: '', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  // for adding new place
  { path: 'add-place', component: ContinuedRegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'location', component: LocationPageComponent },
  { path: 'place-details/:placeId', component: PlaceDetailsComponent },
  { path: 'notification', component: InvitationComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'places', component: HomeFiltrationContainerComponent },
  { path: 'about-us', component: AboutUsComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
