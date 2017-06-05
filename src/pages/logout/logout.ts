import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../pages';
import { AuthData } from '../../shared/shared'

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

constructor(public navCtrl: NavController, private authorize: AuthData){

    this.authorize.logoutUser();
    this.navCtrl.setRoot(LoginPage)

}

}