import { DateTime } from "luxon";
import {
  BaseModel,
  ManyToMany,
  beforeSave,
  column,
  computed,
  manyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import Command from "./Command";
import { CategorieEnum } from "App/enum/categorie.enum";
import Like from "./Like";
import User from "./User";

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public title: string;

  @column()
  public description: string;

  @column()
  public price: number;

  @column()
  public categorie: CategorieEnum;

  @column()
  public like: number;

  @column()
  public dislike: number;

  @column()
  public img: string;

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime;
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime;

  @manyToMany(() => Command, {
    pivotTable: "command_products",
    pivotTimestamps: true,
  })
  public commands: ManyToMany<typeof Command>;

  @manyToMany(() => User, {
    pivotTable: 'likes',
    pivotTimestamps: true
    
  })
  public likes: ManyToMany<typeof User>

  @manyToMany(() => User, {
    pivotTable: 'dislikes',
    pivotTimestamps: true
    
  })
  public dislikes: ManyToMany<typeof User>

  @computed()
  public get quantity() {
    const quantity = this.$extras.pivot_quantity;
    return quantity;
  }

  // public isCategorieValid(categorie: string): boolean {
  //   let enumCate = Object.keys(CategorieEnum);
  //   let isValid: boolean = false;
  //   enumCate.forEach((cate) => {
  //     if (cate === categorie.toLocaleUpperCase()) {
  //       console.log(cate === categorie.toLocaleUpperCase());
  //       return (isValid = true);
  //     }
  //   });
  //   return isValid;
  // }
  // @beforeSave()
  // public static async checkCategorie(product: Product) {
  //   if (!product.isCategorieValid(product.categorie)) {
  //     throw new Error("Invalid categorie");
  //   }
  // }
}
