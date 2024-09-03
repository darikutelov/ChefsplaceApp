import { FlatList } from "react-native"
import { useQuery } from "@realm/react"

import { Category } from "@models/Category"
import CategoryListItem from "@components/admin/categories/CategoryListItem"

export default function CategoriesListView() {
  const categories = useQuery(Category, (q) => q.sorted("position"))

  return (
    <FlatList
      data={categories}
      contentContainerStyle={{ gap: 5 }}
      renderItem={({ item }) => <CategoryListItem category={item} />}
      keyExtractor={(item) => item._id.toString()}
      style={{ gap: 5 }}
    />
  )
}
