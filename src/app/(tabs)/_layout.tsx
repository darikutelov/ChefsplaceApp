import { Tabs } from "expo-router"
import React from "react"

import { TabBarIcon } from "@/src/components/navigation/TabBarIcon"
import { Colors } from "@/src/constants/Colors"
import { useColorScheme } from "@/src/hooks/useColorScheme"

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name='products'
        options={{
          title: "Products",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name='admin'
        options={{
          title: "Admin",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  )
}
