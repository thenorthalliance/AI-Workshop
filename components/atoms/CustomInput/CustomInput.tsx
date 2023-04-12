import { AddIcon, BlockContentIcon } from '@sanity/icons'
import { Button, Stack, Text, TextInput } from '@sanity/ui'
import { useCallback } from 'react'
import { set, unset } from 'sanity'

const CustomInput = (props) => {
  const { elementProps, onChange, value = '' } = props

  const handleChange = useCallback(
    (event) => {
      const nextValue = event.currentTarget.value
      onChange(nextValue ? set(nextValue) : unset())
    },
    [onChange]
  )

  const generateText = async (input: string) => {
    //fetch the value from textinput and pass it in the prompt. then find a way to
    // pass the generated text to to frontend.
  }

  return (
    <Stack space={4}>
      <TextInput
        icon={BlockContentIcon}
        space={10}
        {...elementProps}
        onChange={handleChange}
        value={value}
      />
      {/* <button className="w-96 border-gray-900 border-2 rounded-lg">
        Generate a history
      </button> */}
      <Button
        fontSize={[2, 2, 3]}
        icon={AddIcon}
        mode="ghost"
        padding={[3, 3, 4]}
        text="Generate"
      />
    </Stack>
  )
}

export default CustomInput
