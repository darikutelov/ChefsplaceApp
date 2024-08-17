import { Object, BSON } from "realm"
import { Category } from "@/src/models//Category"

export class Product extends Object<Product> {
  _id: BSON.ObjectId = new BSON.ObjectId()
  name!: string
  barCode?: string
  created: Date = new Date()
  shortDescription?: string
  description?: ProductDescription
  images!: Realm.List<string>
  stock?: number
  onPromotion?: boolean
  price!: number
  productCode?: string
  weight?: number

  // Relations
  category!: Category

  static primaryKey = "_id"
}

export class ProductDescription extends Object<ProductDescription> {
  advantages?: string
  content?: string
  ingredients?: string
  nutritionValues?: Realm.List<NutritionValues>
  storage?: string

  static embedded = true
}

export class NutritionValues extends Object<NutritionValues> {
  label!: string
  text!: string

  static embedded = true
}
