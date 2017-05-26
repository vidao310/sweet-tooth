import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyFoodLibrary } from '../../../bakery_data/allrecipes';

const allFoodRecipes = new MyFoodLibrary().allRecipes;

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    for (let i = 0; i < allFoodRecipes.length; i++) {
      this.items.push({
        title: allFoodRecipes[i].title.toString(),
        note: allFoodRecipes[i].note.toString(),
        icon: allFoodRecipes[i].icon.toString()
      })
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
