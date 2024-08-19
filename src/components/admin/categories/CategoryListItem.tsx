import { View, Text, Image, StyleSheet } from "react-native"
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
    <View style={styles.container}>
      {category.imageUrl && (
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },
  imageWrapper: {
    width: 55,
    height: 55,
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain"
  }
})
