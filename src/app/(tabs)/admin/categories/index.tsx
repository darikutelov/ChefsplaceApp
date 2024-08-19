import { View } from "react-native"

import CategoriesListView from "@/src/components/admin/categories/CategoriesListView"
import AddCategory from "@/src/components/admin/categories/CategoryForm"

export default function categories() {
  return (
    <>
      <View style={{ flex: 1, padding: 20, gap: 20 }}>
        <AddCategory />
        <CategoriesListView />
      </View>
    </>
  )
}
