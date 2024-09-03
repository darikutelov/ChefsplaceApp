import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { ThemedText } from "@components/ThemedText"

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <View className='p-5'>
        <ThemedText type='title'>Products</ThemedText>
      </View>
    </SafeAreaView>
  )
}
