import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'likes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id').unsigned().notNullable().references('id').inTable('products');
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      table.timestamps(true, true)
   
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
