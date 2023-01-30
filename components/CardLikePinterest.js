import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

const CardLikePinterest = ({ image, category, title, description, imageHeight }) => {
    const windowWidth = Dimensions.get('window').width;
    const cardWidth = (windowWidth - 40) / 3;
  return (
    <View style={{
        width: cardWidth,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 20,
        marginBottom: 20,
      }}>
        <Image
          source={{ uri: image }}
          style={{
            width: '100%',
            height: imageHeight,
          }}
        />
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 12, color: '#666666' }}>{category}</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#444444' }}>{title}</Text>
          <Text style={{ fontSize: 14, color: '#888888' }}>{description}</Text>
        </View>
      </View>
  )
}

export default CardLikePinterest