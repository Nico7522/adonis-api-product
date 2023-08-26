import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, HasOne, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Adresse extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public zip: number;

  @column()
  public street: string;

  @column()
  public city: string;

  @column()
  public numero: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

 

  @hasMany(() => User, { foreignKey: "adresse_id"})
  public user: HasMany<typeof User>
}
