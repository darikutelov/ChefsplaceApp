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
        headerShown: false,
        tabBarStyle: {
          paddingTop: 4
        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          headerShown: false,
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
          headerShown: false,
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
