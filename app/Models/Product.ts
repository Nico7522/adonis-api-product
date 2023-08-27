import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, computed, manyToMany } from '@ioc:Adonis/Lucid/Orm'
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

  @column()
  public img: string;

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @manyToMany(() => Command, {
    pivotTable: 'command_products',
    pivotTimestamps: true

  })
  public commands: ManyToMany<typeof Command>

  @computed()
  public get quantity() {
    const quantity = this.$extras.pivot_quantity
    return quantity
  }
}
