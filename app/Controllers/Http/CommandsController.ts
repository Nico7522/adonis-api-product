import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Command from "App/Models/Command";
import Product from "App/Models/Product";
import User from "App/Models/User";
import { CommandDTO } from "App/dto/commandDTO";

export default class CommandsController {
  public async index() {
    const commands = await Command.query().preload("products").preload("user");

    return commands.map((command) => new CommandDTO(command));
  }
  public async store({ request }: HttpContextContract) {
    const id = request.body().user_id;
    const command = new Command();
    command.user_id = id;
    const allProducts = request.body().products;
    const created = await command.save();

    const productData = {};
    for (const product of allProducts) {
      productData[product.product_id] = {
        quantity: product.quantity,
      };
    }

    await created.related("products").attach(productData);

    await created.save();

    return created;
  }

  public async updateUser({ request, params }: HttpContextContract) {
    const command = await Command.find(params.id);
    const newUser = request.input('user_id')
    if (command && newUser) {
      // await command.related("user").dissociate();
      command.user_id = newUser
   
      if (await command.save()) {
        return command;
      }
      return; // 422
    }
    return; // 401
  }

  public async updateProduct({
    request,
    params,
    response,
  }: HttpContextContract) {
    const command = await Command.find(params.id);
    const allProducts = request.body().products;

    if (command) {
      const productData = {};
      for (const product of allProducts) {
        productData[product.product_id] = {
          quantity: product.quantity,
        };
      }
      // L'option false rajoute des produits et ne supprime pas les rows déjà existants.
      // await command.related("products").sync(productData, false);
      await command.related("products").sync(productData);
      await command.load("products");
      await command.load("user")
      
      // command.updated_at = Date.now()
      if (await command.save()) {
        return response.json({
          message: "command succefully updated",
          command_updated: command,
        });
      }
      return; // 422
    }
    return; // 401
  }
}
