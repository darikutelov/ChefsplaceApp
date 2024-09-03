import { Entypo } from "@expo/vector-icons"
import { Href, Link } from "expo-router"
import { View, Pressable } from "react-native"
import { ThemedText } from "@components/ThemedText"
import { useThemeColor } from "@/src/hooks/useThemeColor"

type Props = {
  title: string
  url: string
}

export default function NavListItem({ title, url }: Props) {
  const iconColor = useThemeColor({}, "icon")

  return (
    <Pressable className='py-3 w-full border-b border-gray-400'>
      <Link href={`${url}` as Href} className='flex'>
        <View className='w-full flex-row items-center justify-between'>
          <ThemedText className='text-lg flex-3'>{title}</ThemedText>
          <Entypo
            name='chevron-small-right'
            size={24}
            color={iconColor}
            className='flex-1'
          />
        </View>
      </Link>
    </Pressable>
  )
}
