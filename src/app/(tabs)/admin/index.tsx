import NavListItem from "@/src/components/ui/navigation/NavListItem"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Admin() {
  return (
    <>
      <SafeAreaView className='flex-1'>
        <View className='p-5 gap-5'>
          <View className='divide-y'>
            <NavListItem title={"Категории"} url={"admin/categories"} />
            <NavListItem title={"Продукти"} url={"admin/products"} />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}
