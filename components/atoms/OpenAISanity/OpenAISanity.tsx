import { BlockContentIcon } from '@sanity/icons'
import { Button, Card, Flex, Label, Spinner, Text, TextArea } from '@sanity/ui'
import { useState } from 'react'
import { set, StringInputProps, unset } from 'sanity'

const maxLength = 200

const OpenAISanity = (props: StringInputProps) => {
  // The onChange function is used to update the value of the field
  const { value, onChange } = props

  const [isLoading, setIsLoading] = useState(false)
  const [promt, setPromt] = useState('')

  const callApi = async () => {
    setIsLoading(true)

    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: promt, maxTokens: 100 }),
    }).then((res) => res.json())

    if (response.text) {
      onChange(response.text ? set(response.text) : unset())
    } else {
      console.log('error')
    }
    setIsLoading(false)
  }

  const generateStory = async () => {
    if (!promt) return
    try {
      callApi()
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Card>
      {isLoading && <Spinner />}

      <Card>
        <TextArea
          onChange={(event) => setPromt(event.currentTarget.value)}
          padding={4}
          placeholder="Once upon a time... "
          value={promt}
          maxLength={maxLength}
        />
        <Flex justify="flex-end" padding={1}>
          <Label>
            {promt.length}/{maxLength}
          </Label>
        </Flex>
      </Card>
      <Flex align="baseline" justify="space-between" paddingBottom={4}>
        <Label></Label>
        <Button
          onClick={generateStory}
          icon={BlockContentIcon}
          text="Generate"
          type="button"
          tone="primary"
          padding={[3, 3, 4]}
          disabled={isLoading}
        />
      </Flex>
      <Card paddingTop={4}>
        <Card paddingBottom={4}>
          <Label>AI Response: {value?.length && null} characters</Label>
        </Card>
        <Text>{value}</Text>
        <Flex justify="flex-end" padding={1}></Flex>
      </Card>
    </Card>
  )
}

export default OpenAISanity
