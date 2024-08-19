import { Object, BSON, Realm } from "realm"
import { Product } from "@/src/models/Product"

export class Category extends Object<Category> {
  _id: BSON.ObjectId = new BSON.ObjectId()
  name!: string
  imageUrl?: string
  position: number = 0

  // Relations
  products!: Realm.List<Product> // Let Realm handle the initialization

  static primaryKey = "_id"
}
