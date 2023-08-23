import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Command from './Command';

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public title: string;

  @column()
  public description: string;

  @column()
  public price: number;

  @manyToMany(() => Command, {
    pivotTable: 'command_products',
    pivotColumns: ['quantity']
  })
  public commands: ManyToMany<typeof Command>

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}
