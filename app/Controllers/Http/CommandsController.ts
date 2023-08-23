import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Command from 'App/Models/Command';
import Product from 'App/Models/Product';

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
        const productId = request.body().product_id
        const quantity = request.body().quantity
       const created = await command.save()
        // const product2 = await Product.findOrFail(2)
       
        await created.related('products').attach({
            [productId]: {
                quantity: quantity
            },
          
        })
        
        
        await command.save()
        return command
    }
}
