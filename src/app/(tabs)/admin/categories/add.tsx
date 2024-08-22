import { useRouter } from "expo-router"
import { View } from "react-native"

import CategoryForm from "@/src/components/admin/categories/CategoryForm"

export default function AddCategoryModalScreen() {
  const router = useRouter()

  return (
    <>
      <View className='p-5'>
        <CategoryForm handleDismiss={() => router.dismiss()} />
      </View>
    </>
  )
}
