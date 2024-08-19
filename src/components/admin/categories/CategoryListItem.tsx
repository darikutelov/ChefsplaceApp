import { View, Text, Image } from "react-native"
import { Category } from "@/src/models/Category"
import { K } from "@/src/constants"
import { Ionicons } from "@expo/vector-icons"
import { useRealm } from "@realm/react"
import { useState } from "react"
import { Href, Link } from "expo-router"

type Props = {
  category: Category
}
export default function CategoryListItem({ category }: Props) {
  const realm = useRealm()

  const [isEditing, setIsEditing] = useState(false)

  const deleteCategory = () => {
    realm.write(() => {
      realm.delete(category)
    })
  }
  const editCategory = () => {
    setIsEditing(true)
  }

  return (
    <View className='flex-row items-center gap-1'>
      {category.imageUrl && (
        <View className='w-14 h-14 bg-white rounded-lg overflow-hidden justify-center items-center'>
          <Image
            className='w-12 h-12'
            resizeMode='contain'
            source={{ uri: K.categoryBaseUrl + category.imageUrl }}
          />
        </View>
      )}
      <Text style={{ flex: 1 }}>{category.name}</Text>
      <Link href={`admin/categories/${category._id}` as Href} asChild>
        <Ionicons name='pencil' size={20} />
      </Link>
      <Ionicons name='close' size={20} onPress={() => deleteCategory()} />
    </View>
  )
}
