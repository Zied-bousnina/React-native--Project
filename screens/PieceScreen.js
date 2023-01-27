import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
// import RNFetchBlob from 'rn-fetch-blob';
// import PDFView from 'react-native-pdf';

const PieceScreen = () => {

    const {params: {
        id,
        imgUrl,
        title,
        short_Description,
        long,
        price,
        rating,
        pdf
    }} = useRoute()

  return (
    <View>
      <Text>PieceScreen</Text>
      <Text>{pdf}</Text>
{/* 
      <PDFView
  style={styles.pdf}
  onError={(error)=>console.log(error)}
  onLoad={()=>console.log('PDF rendered successfully')}
  source={{
    uri:'http://www.pdf995.com/samples/pdf.pdf',
  }}
/> */}

{/*  how to download file from react native ?  */}
    </View>
  )
}

export default PieceScreen

//  how to download file in react native ? 