import { PropsWithChildren } from "react"
import Realm from "realm"
import { RealmProvider } from "@realm/react"
import { Category } from "@/src/models/Category"
import {
  NutritionValues,
  Product,
  ProductDescription
} from "@/src/models/Product"

export default function RealmAppProvider({ children }: PropsWithChildren) {
  return (
    <RealmProvider
      schema={[Category, Product, ProductDescription, NutritionValues]}
    >
      {children}
    </RealmProvider>
  )
}
