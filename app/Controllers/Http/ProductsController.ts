import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "App/Models/Product";
import Todo from "App/Models/Product";

export default class TodosController {

    public async index({ request }: HttpContextContract)
    {
        console.log(request.qs());
        
    const products = await Product.query();
    return products
    }
    
    public async show({ auth, request, params}: HttpContextContract)
    
    {
        // const user = await auth.authenticate();
        try {
            const product = await Product.find(params.id);
            if(product){
            return product
        }
        } catch (error) {
        	console.log(error)
        }
    }
    
    public async update({ auth, request, params}: HttpContextContract)
    {
        const product = await Product.find(params.id);
        if (product) {
            product.title = request.input('title');
            product.description = request.input('description');
            product.price = request.input('price')
            
            if (await product.save()) {
            	return product
        	}
        	return; // 422
        }
        return; // 401
    }
    
    public async store({ auth, request, response}: HttpContextContract)
    {
        // const user = await auth.authenticate();
        const product = new Product();
        product.title = request.input('title');
        product.description = request.input('description');
        product.price = request.input('price')
        
        await product.save()
        return product
    }
    
    public async destroy({response, auth, request, params}: HttpContextContract)
    {
        const user = await auth.authenticate();
        const product = await Product.query().where('id', params.id).delete();
        return response.json({message:"Deleted successfully"})
    }
}
