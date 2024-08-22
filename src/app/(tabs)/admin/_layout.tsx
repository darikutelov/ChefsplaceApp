import { Href, Stack, useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { Platform } from "react-native"

export default function Layout() {
  const router = useRouter()

  const modalClose = () => (
    <Ionicons
      style={{ marginRight: 10 }}
      name='arrow-back'
      size={24}
      onPress={() => router.back()}
    />
  )

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
          title: "Категории",
          headerLeft: modalClose,
          headerRight: () => (
            <Ionicons
              name='add'
              size={24}
              onPress={() => router.push("/admin/categories/add" as Href)}
            />
          )
        }}
      />
      <Stack.Screen
        name='categories/[id]'
        options={{
          title: "Редактиране на категория",
          presentation: "modal",
          headerLeft: () => {
            return <>{Platform.OS === "android" && modalClose()}</>
          }
        }}
      />
      <Stack.Screen
        name='categories/add'
        options={{
          title: "Нова категория",
          presentation: "modal",
          headerLeft: () => {
            return <>{Platform.OS === "android" && modalClose()}</>
          }
        }}
      />
    </Stack>
  )
}
