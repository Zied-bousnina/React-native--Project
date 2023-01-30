import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategorieCard from './CategorieCard'

const Categories = () => {
  const [featuredCategories, setfeaturedCategories] = useState([])

  useEffect(() => {
    fetch('https://plmmof9m.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%22category%22%5D%7B...%2Cpieces%5B%5D-%3E%2C%7D')
        .then((response) => response.json())
        .then((json) => {
          setfeaturedCategories(json.result)
        })
        .catch((error) => {
            console.error(error);
        });
}, []);

// console.log(featuredCategories)

// featuredCategories?.map((item) => {
//   // console.log(item.image.asset._ref)

//   console.log(item.image.asset?._ref)

//   // console.log(`https://cdn.sanity.io/images/plmmof9m/production/${(item.image.asset._ref).substring((item.image.asset._ref).indexOf("-")+1,(item.image.asset._ref).length-4)}.${item.image.asset._ref.substring(item.image.asset._ref.length-3)}`)
// })


// console.log(featuredCategories[0]?.image.asset._ref)
  return (
    <ScrollView
    contentContainerStyle={{
      paddingBottom:15,
      paddingTop:10,
      paddingLeft:15
    }}

    horizontal
    // showsHorizontalScrollIndicator={false}
    
    
      >
      {/* CategrieCard */}

      {
        featuredCategories?.map((item) => (
          <CategorieCard
          key={item._id}
          // imgUrl={{ uri:"https://imgtr.ee/images/2023/01/22/GpSbr.png" }}
          imgUrl={{uri:
            `https://cdn.sanity.io/images/plmmof9m/production/${(item.image.asset._ref).substring((item.image.asset._ref).indexOf("-")+1,(item.image.asset._ref).length-4)}.${item.image.asset._ref.substring(item.image.asset._ref.length-3)}`}
          }
          id= {item._id}

          title={item.name}
          pieces = {item.pieces}
          />
        ))
      }
      
    </ScrollView>
  )
}

export default Categories