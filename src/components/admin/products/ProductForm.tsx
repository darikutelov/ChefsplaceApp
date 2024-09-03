import { useState } from "react"
import { View, Button } from "react-native"
import { useRealm } from "@realm/react"
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
  FieldValues
} from "react-hook-form"
import Constants from "expo-constants"

import { TextInput } from "@components/ui/form/TextInput"
import { Product } from "@/src/models/Product"

type Props = {
  product?: Product
  handleDismiss?: (count: number) => void
}

type FormValues = {
  name: string
  imageUrl: string
  position: string
}

export default function ProductForm({ product, handleDismiss }: Props) {
  // State
  const [formError, setError] = useState<Boolean>(false)

  // Hooks
  const realm = useRealm()
  const { ...methods } = useForm({
    mode: "onChange",
    defaultValues: {
      name: product?.name || ""
    }
  })

  // Functions
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log({ data })

    realm.write(() => {
      if (product) {
        // update product
      } else {
        realm.create("Product", {
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
      <View>
        <FormProvider {...methods}>
          <TextInput
            name='name'
            label='Име на продукт'
            placeholder=''
            keyboardType='default'
            rules={{
              required: "Името е задължително"
            }}
            setFormError={setError}
          />
          <TextInput
            name='barCode'
            label='Баркод'
            placeholder=''
            keyboardType='default'
            setFormError={setError}
          />
          <TextInput
            name='shortDescription'
            label='Кратко описание'
            placeholder=''
            keyboardType='default'
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
      <View className='p-1 bg-primary rounded'>
        <Button
          title={product ? "Редактирай" : "Добави"}
          color='white'
          onPress={methods.handleSubmit(onSubmit, onError)}
        />
      </View>
    </View>
  )
}
