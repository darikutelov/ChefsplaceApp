import { View } from "react-native"

import CategoriesListView from "@/src/components/admin/categories/CategoriesListView"
import AddCategory from "@/src/components/admin/categories/CategoryForm"

export default function categories() {
  return (
    <View className='flex-1 p-5'>
      <CategoriesListView />
      <AddCategory />
    </View>
  )
}
