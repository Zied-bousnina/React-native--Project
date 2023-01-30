import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { Platform } from "react-native";
import { ArrowLeftIcon, StarIcon } from "react-native-heroicons/solid";
import DownloadImage from "../components/DownloadImage";


const PieceScreen = () => {

  const isAndroid = Platform.OS ==='android'
  const {
    params: { id, imgUrl, title, short_Description, long, price, rating, pdf },
  } = useRoute();

  const navigation = useNavigation();
  useLayoutEffect((_) => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  // ----------------------------------------------------------------------------------------------------------------------
  // save file with expo-file-system react native  from url ?
  
  console.log('img :', imgUrl)
  // console.log('is android :', isAndroid)

  return (
    <View style={tw`relative `}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={tw`${isAndroid ? 'h-96 w-full': ' h-96 w-56 m-auto'}   bg-gray-300 p-4 `}
      />

      <DownloadImage 
        imgUrl={imgUrl}
      />
       
       
      
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`absolute top-14 left-4 bg-gray-100  p-2 rounded-full `}
      >
        <ArrowLeftIcon
          color={"#00CCBB"}
          size={20}
        />
      </TouchableOpacity>



      <View style={tw`bg-white`}>
        <View
          style={tw`mt-4 flex-row px-4 pt-4 justify-between px-4`}
        >
          <View style={tw`px-3 pb-4`}>
          <Text style={tw`font-bold  text-3xl`} >{title}</Text>
            
            <View style={tw`flex-row   items-center `} >
            
                
          <Text style={tw`pl-2  text-xl `} >{price} TND</Text>

                
            </View>

        </View>
       
{/* // Download Buttons  */}
          
        </View>
      
        
      
        <View style={tw`px-4 pt-4`}>
          <Text style={tw`text-gray-500`} >{short_Description}</Text>
        </View>
        <View style={tw`px-4 pt-4`}>
          <Text style={tw`text-gray-500`} >{long}</Text>
          

        </View>
      </View>

    </View>
  );
};

const style = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
    borderRadius: 25,
  },
  img: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
  }
});

export default PieceScreen;


// const [showOptions, setShowOptions] = useState(false);
// const [downloadType, setDownloadType] = useState(null);

// const handleDownload = (type) => {
//   setDownloadType(type);
//   setShowOptions(false);
  // code to download the file
// };

//  how to download file in react native ?


// <View style={tw` items-center`}>
//             <TouchableOpacity
//               style={tw`bg-blue-500 p-2 rounded-lg m-2`}
//               onPress={() => setShowOptions(!showOptions)}
//             >
//               <Text style={tw`text-white text-center font-bold`}>Download</Text>
//             </TouchableOpacity>
//             {showOptions && (
//               <View style={tw`flex flex-col`}>
//                 <TouchableOpacity
//                   style={tw`bg-blue-500 p-2 rounded-lg m-2`}
//                   onPress={() => handleDownload("pdf")}
//                 >
//                   <Text style={tw`text-white text-center font-bold`}>
//                     Download as PDF
//                   </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={tw`bg-blue-500 p-2 rounded-lg m-2`}
//                   onPress={() => handleDownload("image")}
//                 >
//                   <Text style={tw`text-white text-center font-bold`}>
//                     Download as Image
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//             {downloadType === "pdf" && <Text>Downloading PDF...</Text>}
//             {downloadType === "image" && <Text>Downloading Image...</Text>}
//           </View>