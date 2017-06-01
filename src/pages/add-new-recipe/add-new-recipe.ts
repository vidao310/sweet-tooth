import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-new-recipe',
  templateUrl: 'add-new-recipe.html',
})
export class AddNewRecipePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewRecipePage');
  }

  addNewRecipeToLibrary() {
    console.log("Adding new recipe to DB. need POST request here");
  }

}
