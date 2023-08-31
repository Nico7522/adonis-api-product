import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Cookie {
  public async handle({request, response}: HttpContextContract, next: () => Promise<void>) {
    if (request.cookie('id')) {
      await next()

    } else {
      console.log('c');
      
      response.json({ message: 'Reconnectez vous' })
      return
    }

  }
}
