import { Entypo } from "@expo/vector-icons"
import { Href, Link } from "expo-router"
import { View, Text, Pressable } from "react-native"

type Props = {
  title: string
  url: string
}

export default function NavListItem({ title, url }: Props) {
  return (
    <Pressable className='py-5 w-full border-b border-gray-300'>
      <Link href={`${url}` as Href}>
        <View className='block flex-row w-full justify-between'>
          <Text className='text-lg'>{title}</Text>
          <Entypo name='chevron-small-right' size={24} color='black' />
        </View>
      </Link>
    </Pressable>
  )
}
