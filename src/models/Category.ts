import { Object, BSON, List } from "realm"
import { Product } from "@/src/models/Product"

export class Category extends Object<Category> {
  _id: BSON.ObjectId = new BSON.ObjectId()
  name!: string
  imageUrl?: string
  position: number = 0

  // Relations
  products: List<Product> = new List<Product>()

  static primaryKey = "_id"
}
