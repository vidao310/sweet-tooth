import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cooking-diary-detail',
  templateUrl: 'cooking-diary-detail.html',
})
export class CookingDiaryDetailPage {
selectedDiary: any;

  constructor(public navCtrl: NavController, public navParam: NavParams) {
    this.selectedDiary = this.navParam.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookingDiaryDetailPage');
  }

  editDiary() {
    console.log('TODO edit diary');
  }

  deleteDiary() {
    console.log('TODO delete Diary');
  }

}
