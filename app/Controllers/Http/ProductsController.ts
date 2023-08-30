import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "App/Models/Product";
import User from "App/Models/User";
import { CategorieEnum } from "App/enum/categorie.enum";

export default class TodosController {
  public async index({ request }: HttpContextContract) {
    const products = await Product.query();
    return products;
  }

  public async getByCategorie({ params }: HttpContextContract) {
    console.log(params.categorie);
    if (params.categorie === "all") {
      const products = await Product.query();
      return products;
    }
    const filteredProduct = await Product.query().where({
      categorie: params.categorie,
    });
    if (filteredProduct) {
      return filteredProduct;
    }

    return null;
  }

  public async show({ params }: HttpContextContract) {
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
    // try {
    //   const product = new Product();
    //   product.title = request.input("title");
    //   product.description = request.input("description");
    //   product.price = request.input("price");
    //   product.img = request.input("img");
    //   product.categorie = request.input("categorie");
    //   await product.save();
    //   return product;
    // } catch (error) {
    //   return response.status(422).send(error.message);
    // }
    const productsToCreate = request.body();
    let prod: Product[] = [];
    productsToCreate.map((p) => {
      prod.push(p);
    });
    const products = await Product.createMany(prod);

    return products;
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

  public async like({ request, response }: HttpContextContract) {
    const userId = request.cookie("id");
    const isProductExist = request.body().id;
    const productToLike = await Product.find(isProductExist);
    const isUserExist = await User.find(userId);
    if (productToLike && isUserExist) {
      const alreadyLiked = await productToLike
        .related("likes")
        .query()
        .where({ user_id: userId });
      if (alreadyLiked.length > 0) {
        response.json({message: "Already liked"})
        return;
      }
      productToLike.like = productToLike.like + 1;
      productToLike.related("likes").attach([isUserExist.id]);
      await productToLike.save();
      return response.json({
        message: "Product liked",
        product: productToLike,
      });
    }

    return response.json({ message: "Error" });
  }

  public async isLiked({ request, params }: HttpContextContract) {
    const userId = request.cookie("id");
    const product = await Product.find(params.id);

    if (userId && product) {
      const alreadyLiked = await product
        .related("likes")
        .query()
        .where({ user_id: userId });
      if (alreadyLiked.length > 0) {
        return true;
      } else {
        return false;
      }
    }

    return null;
  }

  public async isDisliked({ request, params }: HttpContextContract) {
    const userId = request.cookie("id");
    const product = await Product.find(params.id);

    if (userId && product) {
      const alreadyDisliked = await product
        .related("dislikes")
        .query()
        .where({ user_id: userId });
      if (alreadyDisliked.length > 0) {
        return true;
      } else {
        return false;
      }
    }

    return null;
  }

  public async dislike({ request, response }: HttpContextContract) {
    const userId = request.cookie("id");
    const isProductExist = request.body().id;
    const productToDislkike = await Product.find(isProductExist);
    const isUserExist = await User.find(userId);
    if (productToDislkike && isUserExist) {
      const alreadyLiked = await productToDislkike
        .related("dislikes")
        .query()
        .where({ user_id: userId });
      if (alreadyLiked.length > 0) {
        response.json({message: "Already disliked"})
        return;
      }
      productToDislkike.dislike = productToDislkike.dislike + 1;
      productToDislkike.related("dislikes").attach([isUserExist.id]);
      await productToDislkike.save();
      return response.json({
        message: "Product disliked",
        product: productToDislkike,
      });
    }

    return response.json({ message: "Error" });
  }
}
