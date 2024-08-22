import { View } from "react-native"

import { ThemedText } from "@/src/components/ThemedText"
import { SafeAreaView } from "react-native-safe-area-context"

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <View className='p-5'>
        <ThemedText type='title'>Products</ThemedText>
      </View>
    </SafeAreaView>
  )
}
