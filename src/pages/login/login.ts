import { Component } from '@angular/core';
import { NavController, Loading, LoadingController, AlertController } from 'ionic-angular';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthData, EmailValidator } from '../../shared/shared';
import { HomePage, SignupPage, ResetPasswordPage } from '../pages';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


public loginForm:FormGroup;
public loading:Loading;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public authProvider: AuthData, public formBuilder: FormBuilder) {

      this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, 
        EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), 
        Validators.required])]
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login Page');
  }

  loginUser(): void {
  if (!this.loginForm.valid){
    console.log(this.loginForm.value);
  } else {
    this.authProvider.loginUser(this.loginForm.value.email, 
        this.loginForm.value.password)
    .then( authData => {
      this.loading.dismiss().then( () => {
        this.navCtrl.setRoot(HomePage);
      });
    }, error => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
}

goToSignup(): void { this.navCtrl.push(SignupPage); }


goToResetPassword(): void { this.navCtrl.push(ResetPasswordPage); }



}
