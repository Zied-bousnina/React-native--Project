import { View, Text, TouchableOpacity, Image, Button, Platform, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
// import CardLikePinterest from '../components/CardLikePinterest'
import Cards from '../components/Cards'
import tw from 'tailwind-react-native-classnames'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'

import DownloadImage from '../components/DownloadImage'

const PiecesByCategoryScreen = () => {
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })

}, [])

    const {params : {id, pieces, imgUrl}} = useRoute()   


    // console.log(imgUrl.uri)

    const isAndroid = Platform.OS ==='android'
    const navigation = useNavigation()

    // console.log(pieces)
  return (
    <View style={tw`relative `}>
      <Image
        source={{
          uri: imgUrl.uri,
        }}
        style={tw`${isAndroid ? 'h-56': 'h-72'} w-full  bg-gray-300 p-4 `}
      />
       {/* <Button title="Download"  onPress={generatePowerpoint} /> */}
      <DownloadImage imgUrl={imgUrl.uri} />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`absolute top-14 
        left-4
        z-50
        p-2

         bg-gray-100  rounded-full `}
      >
        <ArrowLeftIcon
        
          color={"#00CCBB"}
          size={25}
          style={tw`p-2`}

        />
      </TouchableOpacity>

      {/* <View style={tw`bg-white`}> */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`bg-white`}
        contentContainerStyle={tw`bg-white`}
        scrollEnabled={true}

      >

          <Cards pieces={pieces}/>
      </ScrollView>

      {/* </View> */}

    </View>
       

  

  )
}

export default PiecesByCategoryScreen
