import { Stack, useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

export default function Layout() {
  const router = useRouter()

  const handleDismiss = (count: number) => {
    router.dismiss(count)
  }

  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='categories/index'
        options={{
          title: "Shop Categories",
          headerLeft: () => (
            <Ionicons
              name='arrow-back'
              size={24}
              onPress={() => handleDismiss(1)}
            />
          )
        }}
      />
      <Stack.Screen
        name='categories/[id]'
        options={{
          title: "Edit Category",
          presentation: "modal",
          headerShown: false
        }}
      />
    </Stack>
  )
}
