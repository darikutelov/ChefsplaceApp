import { Text, SafeAreaView, Pressable } from "react-native"
import { Href, Link } from "expo-router"

export default function Admin() {
  return (
    <>
      <SafeAreaView className='flex-1 justify-center items-center'>
        <Pressable className='bg-gray-800 p-2 rounded'>
          <Link href={"admin/categories" as Href}>
            <Text className='text-white'>Categories</Text>
          </Link>
        </Pressable>
      </SafeAreaView>
    </>
  )
}
