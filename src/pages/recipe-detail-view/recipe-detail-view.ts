import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthData } from '../../shared/shared'

@Component({
  selector: 'page-recipe-detail-view',
  templateUrl: 'recipe-detail-view.html',
})
export class RecipeDetailViewPage {

  selectedRecipe: any;
  ingredients: any;
  directions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authorize: AuthData) {
    this.selectedRecipe = this.navParams.data;
    this.ingredients = this.selectedRecipe.ingredients;
    this.directions = this.selectedRecipe.directions;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailViewPage');
  }

  recipeAuthor() {
    if(this.selectedRecipe.author = this.authorize.getCurrentUser().uid) {
      return true;
    }
    else { return false; }
  }

}
