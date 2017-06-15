import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from '../../node_modules/rxjs/Observable.js';
import { Recipe } from './recipe';
import firebase from 'firebase';



@Injectable()
export class RecipesApi{

    public baseUrl = 'https://sweeth-tooth.firebaseio.com';
    constructor(private http: Http) { }

    getAllRecipes() : Observable<any> {
         var resultList = [];
        return this.http.get(this.baseUrl+'/recipes.json').map((response: Response) => {
            for (var key in response.json()) {
                if (response.json().hasOwnProperty(key)) {
                    var obj = response.json()[key];
                    obj.recipeKey = key;
                    resultList.push(obj);
                }
            }
            return resultList;
        })
    }

    postNewRecipe(recipe: Recipe) {
        let recipeJson = {
                "title": recipe.title,
                "note": recipe.note,
                "icon": recipe.icon,
                "category": recipe.category,
                "ingredients": recipe.ingredients,
                "directions": recipe.directions,
                "author": recipe.author
            };

        var ref = firebase.database().ref('/recipes');
        var newKey = ref.push().key;
        ref.child(newKey).set(recipeJson);
        return newKey;
    }

    editRecipe(recipe: Recipe){
        let recipeJson = {
                "title": recipe.title,
                "note": recipe.note,
                "icon": recipe.icon,
                "category": recipe.category,
                "ingredients": recipe.ingredients,
                "directions": recipe.directions
            };
        return firebase.database().ref('/recipes/'+recipe.recipeKey).update(recipeJson);
    }

    deleteRecipe(recipe: Recipe){
        return firebase.database().ref('/recipes/'+recipe.recipeKey).remove();
    }
}       