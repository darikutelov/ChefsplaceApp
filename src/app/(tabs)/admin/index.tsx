import { View } from "react-native"

import NavListItem from "@components/ui/navigation/NavListItem"
import { Stack } from "expo-router"
import { Colors } from "@/src/constants/Colors"

export default function Admin() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Админ",
          headerTitleStyle: {
            color: Colors.ui.primary
          }
        }}
      />
      <View className='flex-1 p-5 gap-5'>
        <View className='divide-y'>
          <NavListItem title={"Категории"} url={"admin/categories"} />
          <NavListItem title={"Продукти"} url={"admin/products"} />
        </View>
      </View>
    </>
  )
}
