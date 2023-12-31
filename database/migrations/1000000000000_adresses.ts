import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "adresses";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary()
      table.integer("zip").notNullable();
      table.string("street").notNullable();
      table.string("city").notNullable();
      table.integer("number").notNullable();
  

      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
