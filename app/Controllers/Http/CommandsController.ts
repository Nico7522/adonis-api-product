import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Command from "App/Models/Command";



export default class CommandsController {
  public async index({ request }: HttpContextContract) {
    const commands = await Command.query().preload('products')
   
   return commands
  }
  public async store({ auth, request, response }: HttpContextContract) {
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
}
