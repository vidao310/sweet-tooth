import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class SqliteService {

    constructor(private sqlite: SQLite) { }

    // createFavoritesTable() {
    //     this.sqlite.create({
    //     name: 'sweettooth.db',
    //     location: 'default'
    //     })
    //     .then((db: SQLiteObject) => {

    //     var sql = "CREATE TABLE Favorites (RecipeKey varchar(255))";

    //     db.executeSql(sql, {})
    //     .then(() => console.log('Create Favorites table'))
    //     .catch(e => console.log(e));

    //    // db.close();
    //     })
    //     .catch(e => console.log(e));

    // }

    addToFavoriteTable(recipeKeyValue) {
        this.sqlite.create({
        name: 'sweettooth.db',
        location: 'default'
        })
        .then((db: SQLiteObject) => {
            var createTableSql = "CREATE TABLE IF NOT EXISTS Favorites (RecipeKey varchar(255))";
            var insertSql = "INSERT INTO Favorites VALUES ('"+recipeKeyValue+"')";
            var sqlArray = [createTableSql, insertSql];
            db.open()
                .then(() => {
                    db.sqlBatch(sqlArray)
                        .then(() => console.log('Executed Insert into SQL Key '+recipeKeyValue))
                        .catch(e => console.log(e));})      
            })
        .catch(e => console.log(e));
    }

    removeFromFavoriteTable(recipeKeyValue) {
        this.sqlite.create({
        name: 'sweettooth.db',
        location: 'default'
        })
        .then((db: SQLiteObject) => {
            var sql = "Delete from Favorites WHERE RecipeKey='"+recipeKeyValue+"'";
            db.open();
            db.executeSql(sql, {})
            .then(() => console.log('Executed Delete from SQL Key '+recipeKeyValue))
            .catch(e => console.log(e));
            })
        .catch(e => console.log(e));
    }

    checkIfExistFavorites(recipeKeyValue): any {
        var result = {
            favorite: false,
            favoriteIcon: "heart-outline"
        };

        return this.sqlite.create({
        name: 'sweettooth.db',
        location: 'default'
        })
        .then((db: SQLiteObject) => {
          return  db.open().then(() => {
                var sql = "Select Count(*) from Favorites WHERE RecipeKey='"+recipeKeyValue+"'";
                return db.executeSql(sql, {})
                    .then(function(data) { console.log('Finding count of Select query is ' + data.rows.item(0)['Count(*)']);
                                    var count = parseInt(data.rows.item(0)['Count(*)']);
                                    return count;})
                        .then(function(res) {
                            if(res > 0) { 
                                console.log('Checking if Favorite >0');
                                return result = {
                                    favorite: true,
                                    favoriteIcon: "heart"
                                }
                            }
                            else { 
                                console.log('Checking if Favorite not greather than 0');
                                return result = {
                                    favorite: false,
                                    favoriteIcon: "heart-outline"
                                }
                            }
                        })
                    });                             
            });
    }


    closeDB() {
        this.sqlite.create({
        name: 'sweettooth.db',
        location: 'default'
        })
        .then((db: SQLiteObject) => { db.close(); })
        .catch(e => console.log(e));
    }

}