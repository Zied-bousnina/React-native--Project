import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import tw from 'tailwind-react-native-classnames'
import PiecesCard from './PiecesCard'
// import { urlFor } from '../sanity'
// import sanityClient, { urlFor } from '../sanity'

const FeatureRow = ({
    title,
    description,
    id

}) => {

  const [featuredCategories, setfeaturedCategories] = useState([])
  useEffect(() => {
    fetch(`https://plmmof9m.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%22featured%22%20%26%26%20_id%3D%3D%24id%5D%7B...%2Cpieces%5B%5D-%3E%2C%7D%5B0%5D&%24id=%22${id}%22`)
        .then((response) => response.json())
        .then((json) => {
            setfeaturedCategories(json.result?.pieces)
        })
        .catch((error) => {
            console.error(error);
        });
}, []);

// console.log(featuredCategories)
// featuredCategories?.map((item) => {
//   // console.log(`https://cdn.sanity.io/images/plmmof9m/production/${(item.image.asset._ref).substring((item.image.asset._ref).indexOf("-")+1,(item.image.asset._ref).length-4)}.${item.image.asset._ref.substring(item.image.asset._ref.length-3)}`)
//   //  const url  = urlFor(item?.PDF).url()
//   //  x.substring(x.indexOf("-")+1,x.length-4)
//   const x = item.PDF.asset._ref
//   console.log(item.PDF.asset._ref.substring((item.PDF.asset._ref).indexOf("-")+1,(item.PDF.asset._ref).length-4))
 
//     // console.log(item.PDF.asset._ref)
// })

// console.log(featuredCategories)
  return (
    <View>
     <View
        style={tw`mt-4 flex-row items-center justify-between px-4`}
     >
        <Text style={tw`font-bold text-lg`} >{title}</Text>
        {/* <Text>{description}</Text> */}
        <ArrowRightIcon
        height={20}
        width={20}
        color={'#80421e'}
        />
     </View>
  
        <Text style={tw` text-xs text-gray-500 px-4`}>{description}</Text>
        <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,

        }}
        // showsHorizontalScrollIndicator={false}
        style={tw`pt-4
        `}

        >
            {/* Pieces Card like a Door  */}
            {
                featuredCategories.map((item) => (
                    <PiecesCard
                    key={item._id}
                    id={item._id}
                    imgUrl={`https://cdn.sanity.io/images/plmmof9m/production/${(item.image.asset._ref).substring((item.image.asset._ref).indexOf("-")+1,(item.image.asset._ref).length-4)}.${item.image.asset._ref.substring(item.image.asset._ref.length-3)}`}
                    title={item?.name}
                    short_Description={item?.short_Description}
                    long={item?.long_Description}
                    price={item?.price}
                    rating={item?.rating}
                    pdf={`https://cdn.sanity.io/files/plmmof9m/production/${item.PDF.asset._ref.substring((item.PDF.asset._ref).indexOf("-")+1,(item.PDF.asset._ref).length-4)}.pdf`}
                    />
                ))
            }
{/* 
<PiecesCard 
           id={1}
           imgUrl="https://imgtr.ee/images/2023/01/22/Gp2tJ.png"
           title="Door"
           short_Description="Paid Placements from Partners"
           long="Paid Placements from Partners"
           price={100}
              rating={4}
              
            /> */}
            {/* <PiecesCard 
           id={1}
           imgUrl="https://imgtr.ee/images/2023/01/22/Gp2tJ.png"
           title="Door"
           short_Description="Paid Placements from Partners"
           long="Paid Placements from Partners"
           price={100}
              rating={4}

            />
             <PiecesCard 
           id={1}
           imgUrl="https://imgtr.ee/images/2023/01/22/Gp2tJ.png"
           title="Door"
           short_Description="Paid Placements from Partners"
           long="Paid Placements from Partners"
           price={100}
              rating={4}
              
            />
             <PiecesCard 
           id={1}
           imgUrl="https://imgtr.ee/images/2023/01/22/Gp2tJ.png"
           title="Door"
           short_Description="Paid Placements from Partners"
           long="Paid Placements from Partners"
           price={100}
              rating={4}
              
            />
             <PiecesCard 
           id={1}
           imgUrl="https://imgtr.ee/images/2023/01/22/Gp2tJ.png"
           title="Door"
           short_Description="Paid Placements from Partners"
           long="Paid Placements from Partners"
           price={100}
              rating={4}
              
            /> */}

        </ScrollView>

    </View>
  )
  // https://cdn.sanity.io/images/plmmof9m/production/c72a1205c834f492235d5405dc67b53eb0b00d4f-864x1152.jpg
  // https://cdn.sanity.io/images/plmmof9m/production/daed412ee2df54470df34f8cfca3de9c2f991f9c-922x2048.jpg
}

export default FeatureRow

