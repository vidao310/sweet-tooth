import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthData, RecipesApi, SqliteService } from '../../shared/shared'
import { EditRecipePage, AllRecipesList } from '../pages';

@Component({
  selector: 'page-recipe-detail-view',
  templateUrl: 'recipe-detail-view.html',
})
export class RecipeDetailViewPage {

  selectedRecipe: any;
  favorite: any;
  favoriteIcon: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private authorize: AuthData, private recipeApi: RecipesApi, private sqlite: SqliteService) {
    this.selectedRecipe = this.navParams.data;
    this.checkFavorite();
    // this.favorite = true;
    // this.favoriteIcon = "heart";
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailViewPage');
  }

  ionviewDidLeave() {
    console.log('ionViewDidLeave RecipeDetailViewPage - Close DB');
    this.sqlite.closeDB();
  }

  checkRecipeAuthor() {
    if (this.selectedRecipe.author === this.authorize.getCurrentUser().uid) {
      return true;
    }
    else { return false; }
  }

  toggleFavorites() {
    if(this.favorite) {
      console.log('Changing from Favorite to Unfavorite');
      this.favorite = false;
      this.favoriteIcon = "heart-outline";
      this.unfavoriteRecipe();
    }
    else
    {
      console.log('Changing from UNFavorite to Favorite');
      this.favorite = true;
      this.favoriteIcon = "heart";
      this.favoriteRecipe();
    }
  }

  favoriteRecipe() {
    console.log('TODO Favorite recipe');
    this.sqlite.addToFavoriteTable(this.selectedRecipe.recipeKey);
  }

  unfavoriteRecipe() {
    console.log('TODO UnFavorite recipe');
    this.sqlite.removeFromFavoriteTable(this.selectedRecipe.recipeKey);
  }

  checkFavorite(){
    console.log('Check if Favorite exist');
    var count = this.sqlite.checkIfExistFavorites(this.selectedRecipe.recipeKey);
    //Unreachable code ?????
    if(count > 0) { 
      console.log('Checking if Favorite >0');
      this.favorite = true;
      this.favoriteIcon = "heart"; }
    else { 
      console.log('Checking if Favorite not greather than 0');
      this.favorite = false;
      this.favoriteIcon ="heart-outline"; }
  }

  editRecipe() {
    console.log('TODO edit recipe screen');
    console.log(this.selectedRecipe);
    console.log(this.selectedRecipe.recipeKey);
    this.navCtrl.push(EditRecipePage, this.selectedRecipe);
  }

  deleteRecipe() {
    console.log('Delete Recipe');
    this.recipeApi.deleteRecipe(this.selectedRecipe).then(data => this.navCtrl.push(AllRecipesList));
    
  }

}
