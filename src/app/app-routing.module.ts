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

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // for adding new place
  { path: 'add-place', component: ContinuedRegisterComponent },
  { path: 'location', component: LocationPageComponent },
  { path: 'home', component: HomeFiltrationContainerComponent },
  { path: 'place-details/:placeId', component: PlaceDetailsComponent },
  { path: 'notification', component: InvitationComponent },
  { path: 'user-profile', component: UserProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
