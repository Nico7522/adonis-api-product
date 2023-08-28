import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "App/Models/Product";
import Todo from "App/Models/Product";
import { CategorieEnum } from "App/enum/categorie.enum";

export default class TodosController {
  public async index({ request }: HttpContextContract) {
    console.log(request.qs().categorie);
    const products = await Product.query();
    return products;
  }

  public async getByCategorie({ request, params }: HttpContextContract) {
    console.log(params.categorie);
    
    const filteredProduct = await Product.query().where({'categorie': params.categorie})
    if (filteredProduct) {
        return filteredProduct
    }

    return null
    
    
  }

  public async show({ auth, request, params }: HttpContextContract) {
    // const user = await auth.authenticate();
    try {
      const product = await Product.find(params.id);
      if (product) {
        return product;
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async update({ auth, request, params }: HttpContextContract) {
    const product = await Product.find(params.id);
    if (product) {
      product.title = request.input("title");
      product.description = request.input("description");
      product.price = request.input("price");
      product.img = request.input("img");

      if (await product.save()) {
        return product;
      }
      return; // 422
    }
    return; // 401
  }

  public async store({ auth, request, response }: HttpContextContract) {
    try {
      const product = new Product();
      product.title = request.input("title");
      product.description = request.input("description");
      product.price = request.input("price");
      product.img = request.input("img");
      product.categorie = request.input("categorie");
      await product.save();
      return product;
    } catch (error) {
      return response.status(422).send(error.message);
    }
  }

  public async destroy({
    response,
    auth,
    request,
    params,
  }: HttpContextContract) {
    const user = await auth.authenticate();
    const product = await Product.query().where("id", params.id).delete();
    return response.json({ message: "Deleted successfully" });
  }

  public async like({ response }: HttpContextContract) {
    const productToLike = await Product.find(1);
    if (productToLike) {
      productToLike.like = productToLike.like + 1;

      await productToLike.save();
      return response.json({ message: "Product liked" });
    }

    return response.json({ message: "Error" });
  }
}
