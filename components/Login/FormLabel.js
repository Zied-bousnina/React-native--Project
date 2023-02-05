import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const FormLabel = ({text}) => {
  return (
    <Text style={tw`text-lg p-1 font-semibold`}>
        {text}
    </Text>
  )
}

export default FormLabel