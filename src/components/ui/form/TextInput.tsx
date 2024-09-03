import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text
} from "react-native"

import {
  useController,
  useFormContext,
  UseControllerProps
} from "react-hook-form"

import { ThemedText } from "@components/ThemedText"

interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label: string
  name: string
  defaultValue?: string
  setFormError: Function
}

const ControlledInput = (props: TextInputProps) => {
  const formContext = useFormContext()
  const { formState } = formContext

  const { name, label, rules, defaultValue, ...inputProps } = props

  const { field } = useController({ name, rules, defaultValue })

  const hasError = Boolean(formState?.errors[name])

  return (
    <View className='mb-2'>
      {label && <ThemedText className='m-1 ml-0'>{label}</ThemedText>}
      <View>
        <RNTextInput
          className='p-3 bg-white border border-gray-500 rounded'
          autoCapitalize='none'
          textAlign='left'
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          {...inputProps}
        />

        <View className='px-2 mt-1'>
          {hasError && (
            <Text className='text-red-500'>
              {String(formState.errors[name]?.message)}
            </Text>
          )}
        </View>
      </View>
    </View>
  )
}

export const TextInput = (props: TextInputProps) => {
  const { name, rules, label, defaultValue, setFormError, ...inputProps } =
    props

  const formContext = useFormContext()

  // Placeholder until input name is initialized
  if (!formContext || !name) {
    const msg = !formContext
      ? "TextInput must be wrapped by the FormProvider"
      : "Name must be defined"
    console.error(msg)
    setFormError(true)
    return null
  }

  return <ControlledInput {...props} />
}
