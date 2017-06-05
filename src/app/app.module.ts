import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { Camera } from '@ionic-native/camera';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage, AllRecipesList, AddNewRecipePage, NewRecipeComponent ,RecipeDetailViewPage,CookingDiaryPage, LoginPage, ResetPasswordPage, SignupPage, LogoutPage } from '../pages/pages';
import { RecipesApi, AuthData } from '../shared/shared';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AllRecipesList,
    AddNewRecipePage,
    NewRecipeComponent,
    RecipeDetailViewPage,
    CookingDiaryPage,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    LogoutPage

  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AllRecipesList,
    AddNewRecipePage,
    NewRecipeComponent,
    RecipeDetailViewPage,
    CookingDiaryPage,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    LogoutPage
  ],
  providers: [
    Camera,
    SQLite,
    RecipesApi,
    AuthData,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

