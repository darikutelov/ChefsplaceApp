import NavListItem from "@/src/components/ui/navigation/NavListItem"
import { Text, SafeAreaView, View } from "react-native"

export default function Admin() {
  return (
    <>
      <SafeAreaView className='flex-1'>
        <View className='p-5 gap-5'>
          <Text className='text-3xl font-bold text-center mb-6'>Admin</Text>

          <View className='divide-y'>
            <NavListItem title={"Categories"} url={"admin/categories"} />
            <NavListItem title={"Products"} url={"admin/products"} />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}
