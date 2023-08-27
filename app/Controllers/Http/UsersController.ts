import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import { UserDTO } from "App/dto/userDTO";

export default class UsersController {
  public async index() {
    const users = await User.query().preload('adresse').preload('commands')
    return users.map((user) => new UserDTO(user));
  }

  public async show({ params }: HttpContextContract) {
   
    try {
      const user = await User.find(params.id);
      if (user) {
        await user.load('adresse')
        await user.load('commands')
        return new UserDTO(user);
      }
    } catch (error) {
      console.log(error);
    }
  }
  public async update({ request, params }: HttpContextContract) {
    

    const user = await User.find(params.id);
    if (user) {
      user.name = request.input("name");
      user.surname = request.input("surname");
      user.email = request.input("email");
      if (await user.save()) {
        return new UserDTO(user);
      }
      return;
    }
    return;
  }

  public async destroy({response,  params}: HttpContextContract)
  {
      const user = await User.query().where('id', params.id)
      const userDeleted = await User.query().where('id', params.id).delete()
      if (userDeleted[0] === 1) {
          return response.json({
            user_deleted: user,
            message:"Deleted successfully"})
      }
      return response.json({message: "Error"})
  }
}
