import { View, Image } from "react-native"
import { Category } from "@/src/models/Category"
import { K } from "@/src/constants"
import { Ionicons } from "@expo/vector-icons"
import { useRealm } from "@realm/react"
import { Href, Link } from "expo-router"
import { ThemedText } from "../../ThemedText"
import { useThemeColor } from "@/src/hooks/useThemeColor"

type Props = {
  category: Category
}
export default function CategoryListItem({ category }: Props) {
  const realm = useRealm()
  const iconColor = useThemeColor({}, "icon")

  const deleteCategory = () => {
    realm.write(() => {
      realm.delete(category)
    })
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
      <ThemedText className='flex-1 pl-2'>{category.name}</ThemedText>
      <View className='flex-row items-center gap-2'>
        <Link href={`admin/categories/${category._id}` as Href} asChild>
          <Ionicons name='pencil' color={iconColor} size={16} />
        </Link>
        <Ionicons
          name='close'
          color={iconColor}
          size={20}
          onPress={() => deleteCategory()}
        />
      </View>
    </View>
  )
}
