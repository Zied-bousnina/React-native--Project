import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { StarIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const PiecesCard = ({
    id,
    imgUrl,
    title,
    short_Description,
    long,
    price,
    rating,
    pdf

}) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity
    onPress={
      () => navigation.navigate('piece', {
        id,
        imgUrl,
        title,
        short_Description,
        long,
        price,
        rating,
        pdf
      })
    }
    style={tw`bg-white shadow-lg  mr-3 rounded rounded-lg`}
    >
      <Image
      
       source={{
            uri: imgUrl
        }}
        style={tw` h-36 w-64 rounded-sm`}
        />
        <View style={tw`px-3 pb-4`}>
            <Text style={tw`font-bold text-lg pt-2`} >{title}</Text>
            <View style={tw`flex-row items-center `} >
                <StarIcon
                opacity={0.5}
                size={22}
                color={'#80421e'}
                />
                <Text style={tw`text-xs text-gray-500`} >
                    <Text style={tw`text-yellow-900`} >{rating}</Text>  (100)
                </Text>
            </View>

        </View>
    </TouchableOpacity>
  )
}

export default PiecesCard