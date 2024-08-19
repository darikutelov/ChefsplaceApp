import React, { useState } from "react"
import { View, Text, Button, TextInput } from "react-native"
import { useRealm } from "@realm/react"
import { Category } from "@/src/models/Category"

type Props = {
  category?: Category
  handleDismiss?: (count: number) => void
}
export default function AddCategory({ category, handleDismiss }: Props) {
  const realm = useRealm()

  const [name, setName] = useState(category?.name ?? "")
  const [imageUrl, setImageUrl] = useState(category?.imageUrl ?? "")
  const [position, setPosition] = useState(category?.position.toString() ?? "")

  const handleInputPositionChange = (text: string) => {
    const numericValue = text.replace(/[^0-9-]/g, "")
    setPosition(numericValue)
  }

  const onFormSubmit = () => {
    if (!name || !imageUrl || !position) {
      alert("Please fill in all fields")
      return
    }

    realm.write(() => {
      if (category) {
        category.name = name
        category.imageUrl = imageUrl
        category.position = parseInt(position)
      } else {
        realm.create("Category", {
          name,
          imageUrl,
          position: parseInt(position),
          products: []
        })
      }
    })

    setName("")
    setImageUrl("")
    setPosition("")

    if (handleDismiss) {
      handleDismiss(1)
    }
  }

  return (
    <View className='gap-4'>
      <Text className='text-xl font-bold'>
        {category ? "Edit Category" : "Add New Category"}
      </Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder='Category Name'
      />

      <TextInput
        value={imageUrl}
        onChangeText={setImageUrl}
        placeholder='Category Image Url'
      />

      <TextInput
        value={position}
        onChangeText={handleInputPositionChange}
        placeholder='Category Position'
        keyboardType='numeric'
        maxLength={2}
      />
      <Button
        title={category ? "Update Category" : "Add Category"}
        onPress={onFormSubmit}
      />
    </View>
  )
}
