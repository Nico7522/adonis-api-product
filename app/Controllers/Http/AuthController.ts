import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
import Adresse from "App/Models/Adresse";
import User from "App/Models/User";
export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");

    const token = await auth.use("api").attempt(email, password, {
      expiresIn: "10 days",
    });

    const user = await User.findBy("email", email);
    response.cookie('id', user?.id, {
      httpOnly: true,
      secure: true,
      maxAge: "10d"
    })
    response.plainCookie('token', token.toJSON(), {
      httpOnly: false,
      secure: true,
      maxAge: "10d"
    })
    response.json({
      user: user,
      token: token.toJSON(),
    });
  }

  public async logout({response}: HttpContextContract) {
    response.clearCookie('id')
    response.json({message: "Succefully logout"})
  }

  public async register({ request, auth }: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");
    const name = request.input("name");
    const surname = request.input("surname");
    const adresse = request.input('adresse')
    const user = new User();
    user.email = email;
    user.password = password;
    user.name = name;
    user.surname = surname;
    await user.save()

    // const adresses = (await Adresse.create(adresse)).related('user').create(user)
    const adresseToFind = {zip: adresse.zip, street: adresse.street, city: adresse.city, number: adresse.number}
    const isAdressExist = await Adresse.query().where(adresseToFind).first()
    if (isAdressExist) {
     await user.related('adresse').associate(isAdressExist)
    } else {
      const newAdress = await Adresse.create(adresse)
      await user.related('adresse').associate(newAdress)

    }
    const token = await auth.use("api").login(user, {
      expiresIn: "10 days",
    });

    return {
      user: user,
      token: token.toJSON(),
    };
  }
}
