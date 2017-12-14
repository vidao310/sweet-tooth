import firebase from 'firebase';
import { Component, ViewChild, NgZone } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { HomePage, AllRecipesList, AddNewRecipePage,CookingDiaryPage, LoginPage, LogoutPage } from '../pages/pages';
import { RecipesApi } from '../shared/shared';

@Component({
  templateUrl: 'app.html',
  providers: [RecipesApi, HttpModule]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any;
  zone:NgZone;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.zone = new NgZone({});

    firebase.initializeApp({
    apiKey: "AIzaSyByNkLFGRpkwdJF9ncmv2NaRDZynrqSkUg",
    authDomain: "sweeth-tooth.firebaseapp.com",
    databaseURL: "https://sweeth-tooth.firebaseio.com",
    projectId: "sweeth-tooth",
    storageBucket: "sweeth-tooth.appspot.com",
    messagingSenderId: "1042021337617"
  });

  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  this.zone.run( () => {
    if (!user) {
      this.rootPage = LoginPage;
      unsubscribe();
    } else { 
      this.rootPage = HomePage;
      unsubscribe();
    }
  });     
});




    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'All Recipes', component: AllRecipesList },
      { title: 'Add New Recipe', component: AddNewRecipePage },
      { title: 'Cooking Diary', component: CookingDiaryPage},
      { title: 'Log Out', component: LogoutPage}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
