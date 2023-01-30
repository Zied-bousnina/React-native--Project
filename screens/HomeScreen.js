import { View, Text, Image, TextInput, ScrollView, Platform } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { CheckBadgeIcon, ChevronDownIcon } from 'react-native-heroicons/outline'
// import { ChevronDownIcon } from 'react-native-heroicons/outline'
import { AdjustmentsHorizontalIcon, ChevronLeftIcon, EyeIcon, EyeSlashIcon, SparklesIcon as SparklesIconMini, TvIcon, UserIcon } from "react-native-heroicons/outline";
import { CloudIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories'
import FeatureRow from '../components/FeatureRow'

const HomeScreen = () => {

    const isAndroid = Platform.OS ==='android'
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })

    }, [])

    // useEffect(() => {
    //     fetch ('https://plmmof9m.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%22featured%22%5D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20pieces%5B%5D-%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //     }
    //     ).catch(console.error)

       
    // }, [])
    const [featuredCategories, setfeaturedCategories] = useState([])


    useEffect(() => {
        fetch('https://plmmof9m.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%22featured%22%20%5D%7B...%2Cpieces%5B%5D-%3E%2C%7D')
            .then((response) => response.json())
            .then((json) => {
                setfeaturedCategories(json.result)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    // console.log(featuredCategories)

    
    return (
        <SafeAreaView >
            {/* <Header  */}
            <View style={tw`flex-row  items-center p-2 bg-white `}>
                <Image source={{
                    // uri: 'https://imgtr.ee/images/2023/01/22/GpSbr.png'
                    // uri: 'https://imgtr.ee/images/2023/01/22/Gp2tJ.png'
                    // uri: "https://imgtr.ee/images/2023/01/28/G5JTV.jpg"
                    uri: "https://imgtr.ee/images/2023/01/28/G5vM3.jpg"
                }
                }
                    style={tw`${isAndroid? 'h-14 w-28 p-4 ': 'h-24 w-56 p-4 '} `}
                >

                </Image>
                <View style={tw`p-2`}>
                    <Text style={tw`text-xl text-yellow-900 font-bold`}>L'art Numérique </Text>
                    <Text style={tw`text-sm text-gray-500`}>The pinnacle of digital design</Text>

                </View>
                <View
                    style={tw` p-2 ml-auto`}
                >
                    {/* <UserIcon style={tw`h-6 w-6 text-yellow-900`} /> */}

                </View>
            </View>

            {/* Search  */}

            {/* <View 
            style={tw`flex-row items-center p-2 bg-white`}
             >
                <View 
                style={tw`flex-row items-center p-2 bg-gray-100 rounded-full w-11/12 mx-auto`}
                >
                    <AdjustmentsHorizontalIcon
                    style={tw`h-6 w-6 text-yellow-900`}
                    />

                <TextInput
                    style={tw`bg-gray-100 p-2 rounded-full w-11/12 mx-auto`}
                    placeholder="Search"
                    placeholderTextColor="gray"
                    />
                    </View>
                    


            </View> */}

            {/* Body  */}
           <ScrollView
           contentContainerStyle={{
            paddingBottom:100
           }}
              style={tw`bg-gray-100`}
           >
            {/* Categories */}
            <Categories/>

            {/* Features Rows  */}
            {
                featuredCategories.map((item) => (
                    <FeatureRow
                    key={item._id}
                    title={item.name}
                    
                    description={item.ShortDescription
                    }
                    id={item._id}
                    />
                ))
                    
            }
            {/* <FeatureRow
            title="Door"
            imgUrl="https://imgtr.ee/images/2023/01/22/Gp2tJ.png"
            description="Paid Placements from Partners"

            />
            <FeatureRow
            title="Door"
            imgUrl="https://imgtr.ee/images/2023/01/22/Gp2tJ.png"
            description="Paid Placements from Partners"

            />
            <FeatureRow
            title="Door"
            imgUrl="https://imgtr.ee/images/2023/01/22/Gp2tJ.png"
            description="Paid Placements from Partners"

            />
             <FeatureRow
            title="Door"
            imgUrl="https://imgtr.ee/images/2023/01/22/Gp2tJ.png"
            description="Paid Placements from Partners"

            /> */}
            

           </ScrollView>

                


        </SafeAreaView>
    )
}

export default HomeScreen