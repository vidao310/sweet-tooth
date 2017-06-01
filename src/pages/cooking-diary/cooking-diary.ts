import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cooking-diary',
  templateUrl: 'cooking-diary.html',
})
export class CookingDiaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookingDiaryPage');
  }

  addCookingExperiment() {
    console.log('Add New Experiment with Pictures, Notes, etc');
  }
}
