import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
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
      secure: true
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

    /**
     * Create a new user
     */

    const user = new User();
    user.email = email;
    user.password = password;
    user.name = name;
    user.surname = surname;
    await user.save();

    const token = await auth.use("api").login(user, {
      expiresIn: "10 days",
    });

    return {
      user: user,
      token: token.toJSON(),
    };
  }
}
