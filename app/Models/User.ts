import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
  hasOne,
  HasOne,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Command from './Command';
import Adresse from './Adresse';
import Like from './Like';
import Product from './Product';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public name: string;

  @column()
  public surname: string;

  @column()
  public email: string
  
  @column()
  public birthdate: Date

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column()
  public adresse_id?: number

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @belongsTo(() => Adresse, { serializeAs: "adresse", foreignKey: "adresse_id" })
  public adresse: BelongsTo<typeof Adresse>
  
  @hasMany(() => Command, {
    serializeAs: 'commands', foreignKey: "user_id"
  })
  public commands: HasMany<typeof Command>

  @manyToMany(() => Product, {
    pivotTable: 'likes',
    pivotTimestamps: true
  })
  public productsLiked: ManyToMany<typeof Product>

  @manyToMany(() => Product, {
    pivotTable: 'dislikes',
    pivotTimestamps: true
  })
  public productsDisliked: ManyToMany<typeof Product>

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
