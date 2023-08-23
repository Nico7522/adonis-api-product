import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'command_products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('command_id').unsigned().notNullable().references('id').inTable('commands');
      table.integer('product_id').unsigned().notNullable().references('id').inTable('products');
      table.integer('quantity').notNullable()

      
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
