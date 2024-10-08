import { SafeAreaView, View } from "react-native"

import { ThemedText } from "@/src/components/ThemedText"

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className='p-5'>
        <ThemedText type='title'>Home Page</ThemedText>
      </View>
    </SafeAreaView>
  )
}
