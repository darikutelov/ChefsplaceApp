import { useState } from "react"
import { View, Text, Button } from "react-native"
import { useRealm } from "@realm/react"
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
  FieldValues
} from "react-hook-form"
import Constants from "expo-constants"

import { Category } from "@/src/models/Category"
import { TextInput } from "@/src/components/ui/form/TextInput"

type Props = {
  category?: Category
  handleDismiss?: (count: number) => void
}

type FormValues = {
  name: string
  imageUrl: string
  position: string
}

export default function AddCategory({ category, handleDismiss }: Props) {
  // State
  const [formError, setError] = useState<Boolean>(false)

  // Hooks
  const realm = useRealm()
  const { ...methods } = useForm({ mode: "onChange" })

  // Functions
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log({ data })

    realm.write(() => {
      if (category) {
        category.name = data.name
        category.imageUrl = data.imageUrl
        category.position = parseInt(data.position)
      } else {
        realm.create("Category", {
          name: data.name,
          imageUrl: data.imageUrl,
          position: parseInt(data.position),
          products: []
        })
      }

      // reset form
      methods.reset()

      if (handleDismiss) {
        handleDismiss(1)
      }
    })
  }

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log({ errors })
  }

  return (
    <View className='gap-4'>
      <Text className='text-xl font-bold mb-2'>
        {category ? "Редактиране на категория" : "Добавяне на категория"}
      </Text>

      <View>
        <FormProvider {...methods}>
          <TextInput
            name='name'
            label='Име на категория'
            placeholder=''
            keyboardType='default'
            rules={{
              required: "Името е задължително"
            }}
            setFormError={setError}
          />
          <TextInput
            name='imageUrl'
            label='Линк към снимка на категория'
            placeholder=''
            keyboardType='default'
            setFormError={setError}
          />
          <TextInput
            name='position'
            label='Позиция на категорията в менюто'
            placeholder=''
            keyboardType='default'
            maxLength={2}
            rules={{
              required: "Позицията е задължителна",
              pattern: {
                value: /^\d{1,2}$/,
                message: "Позицията трябва да е цяло число между 0 и 99"
              }
            }}
            setFormError={setError}
          />
        </FormProvider>
      </View>
      <View className='p-1 bg-gray-900 rounded'>
        <Button
          title={category ? "Редактирай" : "Добави"}
          color='white'
          onPress={methods.handleSubmit(onSubmit, onError)}
        />
      </View>
    </View>
  )
}
