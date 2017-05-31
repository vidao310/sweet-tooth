import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { RecipesApi } from '../../shared/shared';
import { RecipeDetailViewPage } from '../pages';
import * as _ from 'lodash';

@Component({
  selector: 'page-list',
  templateUrl: 'all-recipes-list.html'
})
export class AllRecipesList {
  selectedItem: any;
  items: Array<{title: string, note: string, icon: string, category: string, ingredients: Array<{}>, directions: Array<{}>}>;
  recipesCategories: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController, private recipesApi: RecipesApi) {
    this.selectedItem = navParams.get('item');
    this.items = [];
    this.recipesCategories = [];
  }

  itemTapped(event, item) {
    this.navCtrl.push(RecipeDetailViewPage, item);
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: "Baking..."
    });

    loader.present().then(() => {
          this.recipesApi.getAllRecipes().subscribe(data => {
          data.body.forEach(element => { this.items.push({
            title: element.title,
            note: element.note,
            icon: element.icon,
            category: element.category,
            ingredients: element.ingredients,
            directions: element.directions
          })
        });

        this.recipesCategories = _.chain(this.items).groupBy('category').toPairs().map(item => _.zipObject(['categoryName', 'categoryRecipes'], item )).value();
        console.log(this.recipesCategories);

        loader.dismiss(); 
      });
    })
}

}

