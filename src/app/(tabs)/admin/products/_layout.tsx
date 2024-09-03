import { Colors } from "@/src/constants/Colors"
import { useThemeColor } from "@/src/hooks/useThemeColor"
import { Ionicons } from "@expo/vector-icons"
import { Href, Stack, useRouter } from "expo-router"

export default function ProductStack() {
  const router = useRouter()
  const iconColor = useThemeColor({}, "icon")
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          title: "Продукти",
          headerTitleStyle: {
            color: Colors.ui.primary
          },
          headerLeft: () => (
            <Ionicons
              style={{ marginRight: 10 }}
              color={iconColor}
              name='arrow-back'
              size={24}
              onPress={() => router.back()}
            />
          ),
          headerRight: () => (
            <Ionicons
              name='add'
              color={iconColor}
              size={24}
              onPress={() => router.push("/admin/products/add" as Href)}
            />
          )
        }}
      />

      <Stack.Screen
        name='add'
        options={{
          presentation: "modal",
          title: "Нов продукт",
          headerTitleStyle: {
            color: Colors.ui.primary
          }
        }}
      />
    </Stack>
  )
}
