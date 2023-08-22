import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Command from 'App/Models/Command';

export default class CommandsController {

    public async index({ request }: HttpContextContract)
    {
    const command = await Command.query().preload('user')
    
    return command
    }
    public async store({ auth, request, response}: HttpContextContract)
    {
        const id = request.body().user_id
        
       
        
        
        const command = new Command();
        command.user_id = id
        
        
        await command.save()
        return command
    }
}
