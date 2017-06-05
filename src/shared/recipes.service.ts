import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from '../../node_modules/rxjs/Observable.js';
import { Recipe } from './../app/recipe';


@Injectable()
export class RecipesApi{

    public baseUrl = 'https://sweeth-tooth.firebaseio.com';
    constructor(private http: Http) { }

    // getAllRecipes(){
    //     return new Promise(resolve => {
    //         console.log("Debugging getAllRecipes method: result");
    //         this.http.get(this.baseUrl+'/recipes.json').map(respone => )   .subscribe(result => resolve(result));
    //     });
    // }

    allRecipes: any;
    getAllRecipes() : Observable<any> {
        return this.http.get(this.baseUrl+'/recipes.json').map((response: Response) => {
            this.allRecipes = response.json();
            return this.allRecipes;
        })
    }

    postNewRecipe(recipe: Recipe) {
        let recipeJson = {
                "title": recipe.title,
                "note": recipe.note,
                "icon": recipe.icon,
                "category": recipe.category,
                "ingredients": recipe.ingredients,
                "directions": recipe.directions
            };

        this.http.post(this.baseUrl+'/recipes.json', recipeJson);
    }
}       