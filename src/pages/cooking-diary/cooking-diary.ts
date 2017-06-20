import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetPhotoLibrary } from './../../shared/shared';

@Component({
  selector: 'page-cooking-diary',
  templateUrl: 'cooking-diary.html',
})
export class CookingDiaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private getPhotos: GetPhotoLibrary) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookingDiaryPage');
  }

  addCookingExperiment() {
    console.log('Add New Experiment with Pictures, Notes, etc');
    console.log('Debug Pick Many Photos');
    this.getPhotos.pickPhoto();
  }

}
