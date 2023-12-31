/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.get("user", "UsersController.index");
  Route.get("user/:id", "UsersController.show");
  Route.put("user/:id", "UsersController.update");
  Route.delete("user/:id", "UsersController.destroy");
  
}).prefix('api')

Route.group(() => {
  Route.post("register", "AuthController.register");
  Route.post("login", "AuthController.login");
  Route.get("logout", "AuthController.logout");

}).prefix("api");

Route.group(() => {
  Route.get('command', "CommandsController.index")
  Route.post('command', "CommandsController.store")
  Route.put('command/user/:id', "CommandsController.updateUser")
  Route.put('command/product/:id', "CommandsController.updateProduct")
  Route.get('command/user', "CommandsController.show")
}).prefix('api');

Route.group(() => {
Route.get("product", "ProductsController.index");
Route.get("product/:id", "ProductsController.show");
Route.get("product/isliked/:id", "ProductsController.isLiked");
Route.get("product/isdisliked/:id", "ProductsController.isDisliked");
Route.get("product/categorie/:categorie", "ProductsController.getByCategorie");
Route.put("product/update/:id", "ProductsController.update");
Route.post("product", "ProductsController.store");
Route.put("product/like", "ProductsController.like").middleware('auth')
Route.put("product/dislike", "ProductsController.dislike").middleware('auth')
}).prefix('api');
