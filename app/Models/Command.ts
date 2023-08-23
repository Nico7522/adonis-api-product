import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasOne, ManyToMany, belongsTo, column, computed, hasOne, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Product from './Product'

export default class Command extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public user_id: number 

  @belongsTo(() => User, { foreignKey: "user_id"})
  public user: BelongsTo<typeof User>

  @manyToMany(() => Product, {
    pivotTable: 'command_products',
    pivotColumns: ['quantity',],
    
    
  })
  public products: ManyToMany<typeof Product>
   

    
}
