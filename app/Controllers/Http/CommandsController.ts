import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Command from "App/Models/Command";
import User from "App/Models/User";

import {
  CommandDTO,
  CommandForUserDTO,
  CommandUpdatedDTO,
} from "App/dto/commandDTO";

export default class CommandsController {
  public async index() {
    const commands = await Command.query().preload("products").preload("user");
    if (commands) {
      return commands.map((command) => new CommandDTO(command));
    }
    return null;
  }
  public async show({ request, response }: HttpContextContract) {
    const id = request.cookie("id");
    
    
    const commands = await Command.query()
      .where("user_id", id)
      .preload("products");
    if (commands) {
      response.json(commands.map((command) => new CommandForUserDTO(command)));
      return;
    }
    response.notFound();
  }

  public async store({ request }: HttpContextContract) {
    const userId = request.cookie('id')  
    const command = new Command();
    command.user_id = userId;
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
    const commandPosted = await Command.find(created.id)
    if (commandPosted) {
     await commandPosted.load('products')
    }

    return commandPosted;
  }

  public async updateUser({ request, params, response }: HttpContextContract) {
    const command = await Command.find(params.id);
    const userId = request.input("user_id");
    const newUser = await User.find(userId);
    if (command && newUser) {
      command.user_id = newUser.id;
      await command.load("products");
      if (await command.save()) {
        return response.json({
          message: "command succefully updated",
          command_updated: new CommandUpdatedDTO(command),
        });
      }
    }
    return response.notModified();
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
      command.updated_at = new Date();
      await command.load("products");
      await command.load("user");
      command.updated_at = Date.now();
      if (await command.save()) {
        return response.json({
          message: "command succefully updated",
          command_updated: new CommandUpdatedDTO(command),
        });
      }
    }
    return response.notModified();
  }
}
