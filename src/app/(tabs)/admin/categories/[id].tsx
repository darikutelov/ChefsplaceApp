import { Category } from "@/src/models/Category"
import { useObject } from "@realm/react"
import { useLocalSearchParams, useRouter } from "expo-router"
import { View } from "react-native"
import { BSON } from "realm"

import CategoryForm from "@/src/components/admin/categories/CategoryForm"

export default function UpdateCategoryModalScreen() {
  const { id } = useLocalSearchParams()
  const router = useRouter()

  const category =
    useObject(Category, new BSON.ObjectId(id as string)) ?? undefined

  const handleDismiss = (count: number) => {
    router.dismiss(count)
  }

  return (
    <>
      <View style={{ padding: 20 }}>
        <CategoryForm category={category} handleDismiss={handleDismiss} />
      </View>
    </>
  )
}
