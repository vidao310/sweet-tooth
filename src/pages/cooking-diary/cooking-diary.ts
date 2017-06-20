import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { GetPhotoLibrary } from './../../shared/shared';
import { CookingDiaryDetailPage } from '../pages';

@Component({
  selector: 'page-cooking-diary',
  templateUrl: 'cooking-diary.html',
})
export class CookingDiaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private getPhotos: GetPhotoLibrary, private imagePicker: ImagePicker) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookingDiaryPage');
  }

  addFirstTest() {
    this.navCtrl.push(CookingDiaryDetailPage, {pictures: [], title: "Test Tile Diary", date: "01/01/2017", note: "Test Note Diary"});
  }

  addCookingExperiment() {
    console.log('Add New Experiment with Pictures, Notes, etc');
    console.log('Debug Pick Many Photos');
    console.log("debug PIckPhoto function");
      let options = {
            maximumImagesCount: 8,
            width: 500,
            height: 500,
            quality: 75
        }

    return this.imagePicker.getPictures(options).then((results) => {
            this.navCtrl.push(CookingDiaryDetailPage, {pictures: results, title: "Test Title Diary", date: "03/03/2017", note: "Test Note Diary"});
        }, (err) => { 
            console.log('Error picking many images');
        });
}
}
