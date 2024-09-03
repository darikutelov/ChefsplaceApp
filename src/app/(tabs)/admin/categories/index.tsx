import { View } from "react-native"

import CategoriesListView from "@components/admin/categories/CategoriesListView"

export default function CategoriesList() {
  return (
    <View className='flex-1 p-5'>
      <CategoriesListView />
    </View>
  )
}
