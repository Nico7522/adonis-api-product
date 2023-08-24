import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, ManyToMany, belongsTo, column,  manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Product from './Product'

export default class Command extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @column()
  public user_id: number 

  @belongsTo(() => User, { foreignKey: "user_id"})
  public user: BelongsTo<typeof User>

  @manyToMany(() => Product, {
    pivotTable: 'command_products',
    pivotColumns: ['quantity'],
    pivotTimestamps: true
    
  })
  public products: ManyToMany<typeof Product>
   

    
}
