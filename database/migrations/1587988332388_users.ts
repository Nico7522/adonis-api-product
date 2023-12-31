import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 50).notNullable();
      table.string('surname', 50).notNullable();
      table.string('email', 255).notNullable();
      table.date('birthdate').notNullable();
      table.string('password', 500).notNullable()
      table.string('remember_me_token').nullable()
      table
      .integer("adresse_id")
      .unsigned()
      .references("id")
      .inTable("adresses")
      .onDelete("CASCADE");
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
