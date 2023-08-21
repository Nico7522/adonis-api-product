import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public title: string;

  @column()
  public description: string;

  @column()
  public price: number;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}
