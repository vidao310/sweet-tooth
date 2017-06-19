import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetPhotoLibrary } from './../../shared/shared';

@Component({
  selector: 'page-cooking-diary',
  templateUrl: 'cooking-diary.html',
})
export class CookingDiaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private getPhoto: GetPhotoLibrary) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookingDiaryPage');
  }

  addCookingExperiment() {
    console.log('Add New Experiment with Pictures, Notes, etc');
    this.getPhoto.selectPhoto();
  }
}
