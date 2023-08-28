import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { CategorieEnum } from 'App/enum/categorie.enum'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 100).notNullable()
      table.text('description').notNullable()
      table.integer('price').notNullable()
      table.enu('categorie', Object.values(CategorieEnum)).notNullable()
      table.integer('like').defaultTo(0)
      table.integer('dislike').defaultTo(0)
      table.string('img').notNullable()
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }


}
