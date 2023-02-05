import { View, Text, ScrollView, Dimensions, FlatList, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import CardLikePinterest from './CardLikePinterest';
import { useNavigation } from '@react-navigation/native';

const Cards = ({pieces}) => {

    
    const { width } = Dimensions.get("window");
const cardWidth = (width - 60) / 3;

console.log('pieces', pieces[0])

const navigation = useNavigation();
  return (
  
    <FlatList
    data={pieces}
    numColumns={3}
    
    
    
    // keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
        <TouchableOpacity
        style={[styles.card, { width: cardWidth }]}
        // onPress={() => console.log("Pressed")}
        onPress={
            () => navigation.navigate('piece', {
              id: item._id,
              imgUrl: `https://cdn.sanity.io/images/plmmof9m/production/${(item.image.asset._ref).substring((item.image.asset._ref).indexOf("-")+1,(item.image.asset._ref).length-4)}.${item.image.asset._ref.substring(item.image.asset._ref.length-3)}`,
              title: item.name,
              short_Description: item.ShortDescription,
              
              price: item.price,
              
              pdf: `https://cdn.sanity.io/files/plmmof9m/production/${item.PDF.asset._ref.substring((item.PDF.asset._ref).indexOf("-")+1,(item.PDF.asset._ref).length-4)}.pdf`
            })
          }
      >
      <View 
      
      style={[styles.card, { width: cardWidth }]}>
            


    
        <Image 
        
         source={{
            uri:  
                `https://cdn.sanity.io/images/plmmof9m/production/${(item.image.asset._ref).substring((item.image.asset._ref).indexOf("-")+1,(item.image.asset._ref).length-4)}.${item.image.asset._ref.substring(item.image.asset._ref.length-3)}`
              
         }} style={styles.image} />

           

      </View>
        </TouchableOpacity>
    )}
    />
   
   
  )
}
const styles = StyleSheet.create({
    card: {
      margin: 10,
      aspectRatio: 1,
      borderRadius: 8,
      overflow: "hidden",
      backgroundColor: "#F7F7F7",
    },
    image: {
      flex: 1,
      width: null,
      height: null,
    },
  });

export default Cards