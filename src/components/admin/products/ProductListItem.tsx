import { View, Image } from "react-native"
import { Href, Link } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

import { Product } from "@/src/models/Product"
import { K } from "@/src/constants"
import { ThemedText } from "../../ThemedText"
import { useThemeColor } from "@/src/hooks/useThemeColor"
import { useRealm } from "@realm/react"

export default function ProductListItem({ product }: { product: Product }) {
  const realm = useRealm()
  const iconColor = useThemeColor({}, "icon")

  const deleteCategory = () => {
    realm.write(() => {
      realm.delete(product)
    })
  }

  return (
    <View className='flex-row items-center gap-1'>
      {product.images[0] && (
        <View className='w-14 h-14 bg-white rounded-lg overflow-hidden justify-center items-center'>
          <Image
            className='w-12 h-12'
            resizeMode='contain'
            source={{ uri: K.productsBaseUrl + product.images[0] }}
          />
        </View>
      )}
      <ThemedText className='flex-1 pl-2'>{product.name}</ThemedText>
      <View className='flex-row items-center gap-2'>
        <Link href={`admin/categories/${product._id}` as Href} asChild>
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
