import { Platform } from "react-native"
import { Href, Stack, useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

import { Colors } from "@/src/constants/Colors"
import { useThemeColor } from "@/src/hooks/useThemeColor"

export default function Layout() {
  const router = useRouter()
  const iconColor = useThemeColor({}, "icon")

  const modalClose = () => (
    <Ionicons
      style={{ marginRight: 10 }}
      color={iconColor}
      name='arrow-back'
      size={24}
      onPress={() => router.back()}
    />
  )

  return (
    <Stack>
      <Stack.Screen name='index' />
      <Stack.Screen
        name='categories/index'
        options={{
          title: "Категории",
          headerTitleStyle: {
            color: Colors.ui.primary
          },
          headerLeft: modalClose,
          headerRight: () => (
            <Ionicons
              name='add'
              color={iconColor}
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
          headerTitleStyle: {
            color: Colors.ui.primary
          },
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
          headerTitleStyle: {
            color: Colors.ui.primary
          },
          presentation: "modal",
          headerLeft: () => {
            return <>{Platform.OS === "android" && modalClose()}</>
          }
        }}
      />

      <Stack.Screen
        name='products'
        options={{
          headerShown: false
        }}
      />
    </Stack>
  )
}
