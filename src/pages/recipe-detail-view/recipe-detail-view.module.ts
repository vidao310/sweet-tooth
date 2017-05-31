import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeDetailViewPage } from './recipe-detail-view';

@NgModule({
  declarations: [
    RecipeDetailViewPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeDetailViewPage),
  ],
  exports: [
    RecipeDetailViewPage
  ]
})
export class RecipeDetailViewPageModule {}
