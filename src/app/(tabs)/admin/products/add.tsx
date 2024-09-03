import { View } from "react-native"
import { useRouter } from "expo-router"

import ProductForm from "@/src/components/admin/products/ProductForm"

export default function AddNewProduct() {
  const router = useRouter()

  return (
    <View className='p-5'>
      <ProductForm handleDismiss={() => router.dismiss()} />
    </View>
  )
}
