import { SafeAreaView, View } from "react-native"

import { ThemedText } from "@/src/components/ThemedText"

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <View className='p-5'>
        <ThemedText type='title'>Products</ThemedText>
      </View>
    </SafeAreaView>
  )
}
