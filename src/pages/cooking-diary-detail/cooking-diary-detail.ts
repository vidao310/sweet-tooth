import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker'

@Component({
  selector: 'page-cooking-diary-detail',
  templateUrl: 'cooking-diary-detail.html',
})
export class CookingDiaryDetailPage {
selectedDiary: any;

  constructor(public navCtrl: NavController, public navParam: NavParams, private datePicker : DatePicker) {
    this.selectedDiary = this.navParam.data;
    this.selectedDiary.date = new Date().toISOString();
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

  selectDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      allowOldDates: true,
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {console.log('Got date: ', date);
              this.selectedDiary.date = date;},
      err => console.log('Error occurred while getting date: ', err)
    );
  }

}
