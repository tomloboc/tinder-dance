import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FirstSectionComponent } from './home/first-section/first-section.component';
import { FirstSectionJoinComponent } from './home/first-section-join/first-section-join.component';
import {RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { ProfileComponent } from './logged-in/profile/profile.component';
import { PhotoCheckComponent } from './logged-in/photo-check/photo-check.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {AuthService} from './auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logged-in', component: LoggedInComponent},
  {path : 'user-profile', component: UserProfileComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstSectionComponent,
    FirstSectionJoinComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    LoggedInComponent,
    ProfileComponent,
    PhotoCheckComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PageScrollModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}

