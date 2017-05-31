import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipesApi } from '../../shared/shared';
import { RecipeDetailViewPage } from '../pages';

// const allFoodRecipes = new MyFoodLibrary().allRecipes;

@Component({
  selector: 'page-list',
  templateUrl: 'all-recipes-list.html'
})
export class AllRecipesList {
  recipes = Array();
  selectedItem: any;
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipesApi: RecipesApi) {
    this.selectedItem = navParams.get('item');
    this.items = [];
  }

  itemTapped(event, item) {
    this.navCtrl.push(RecipeDetailViewPage, item);
  }

  ionViewDidLoad() {
  console.log("Using ion View Did Load");
  this.recipesApi.getAllRecipes().subscribe(data => {
    data.body.forEach(element => { this.items.push({
      title: element.title,
      note: element.note,
      icon: element.icon
    })
  }); 
});

}

}

