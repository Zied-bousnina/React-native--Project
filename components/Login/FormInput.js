import { View, Text, TextInput } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const FormInput = (props) => {
    let {...other} = props
  return (
    <TextInput style={tw`border border-blue-400 rounded px-3 py-2`} {...other} />
  )
}

export default FormInput