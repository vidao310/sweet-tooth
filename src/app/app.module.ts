import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage, AllRecipesList, AddNewRecipePage,RecipeDetailViewPage, EditRecipePage ,CookingDiaryPage, CookingDiaryDetailPage, CookingDiaryAddPage ,LoginPage, ResetPasswordPage, SignupPage, LogoutPage } from '../pages/pages';
import { RecipesApi, AuthData, SqliteService, GetPhotoLibrary } from '../shared/shared';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { SQLite } from '@ionic-native/sqlite';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { ImagePicker } from '@ionic-native/image-picker';
import { DatePicker } from '@ionic-native/date-picker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AllRecipesList,
    AddNewRecipePage,
    RecipeDetailViewPage,
    EditRecipePage,
    CookingDiaryPage,
    CookingDiaryDetailPage,
    CookingDiaryAddPage,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    LogoutPage

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AllRecipesList,
    AddNewRecipePage,
    RecipeDetailViewPage,
    EditRecipePage,
    CookingDiaryPage,
    CookingDiaryDetailPage,
    CookingDiaryAddPage,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    LogoutPage
  ],
  providers: [
    Camera,
    SQLite,
    RecipesApi,
    SqliteService,
    AuthData,
    StatusBar,
    SplashScreen,
    GetPhotoLibrary,
    ImagePicker,
    PhotoLibrary,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

