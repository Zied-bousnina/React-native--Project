import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const CategorieCard = ({
    imgUrl,
    title
}) => {
  return (
    <TouchableOpacity
    style={tw`relative mr-2`}
    >
        {/* <Image source={{
            uri: imgUrl
        }} 
        // style={tw`h-20 w-20 rounded-full`}
        /> */}
        <Image
        source={imgUrl}
        style={tw`h-20 w-20 rounded`}
        />

      <Text
        style={tw`absolute bottom-1 left-1 text-white font-bold `}
      >{title}</Text>

      
    </TouchableOpacity>
  )
}

export default CategorieCard