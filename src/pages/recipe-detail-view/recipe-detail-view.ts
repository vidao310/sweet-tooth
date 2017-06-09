import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthData } from '../../shared/shared'

@Component({
  selector: 'page-recipe-detail-view',
  templateUrl: 'recipe-detail-view.html',
})
export class RecipeDetailViewPage {

  selectedRecipe: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private authorize: AuthData) {
    this.selectedRecipe = this.navParams.data;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailViewPage');
  }

  checkRecipeAuthor() {
    if (this.selectedRecipe.author === this.authorize.getCurrentUser().uid) {
      return true;
    }
    else { return false; }
  }

  favoriteRecipe() {
    console.log('TODO Favorite recipe');
  }
  editRecipe() {
    console.log('TODO edit recipe screen');
  }

  deleteRecipe() {
    console.log('TODO delte recipe');
  }

}
