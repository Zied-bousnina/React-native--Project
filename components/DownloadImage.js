import { View, Text, Button, Platform, Linking, StyleSheet } from 'react-native'
import React from 'react'
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import pptxgen from 'pptxgenjs';
import tw from 'tailwind-react-native-classnames';

const DownloadImage = ({imgUrl}) => {
  const isAndroid = Platform.OS ==='android'
    console.log('imgUrlDDD :', imgUrl)

    // generate  Power Point 
    const generatePowerpoint = () => {
        let ppt = new pptxgen();
    
        let slide = ppt.addSlide();
        slide.background = { path: imgUrl };
       
        ppt.write("base64").then(base64 => {
          const filename = FileSystem.documentDirectory + "MyPowerpoint.pptx";
          FileSystem.writeAsStringAsync(filename, base64, {
            encoding: FileSystem.EncodingType.Base64
          }).then(() => {
            Sharing.shareAsync(filename);
          });
        });
      };
  
  return (
    <>
    <Button title={isAndroid ? "Download" : "Show Image "}  onPress={isAndroid ? generatePowerpoint: () => {
                Linking.openURL(
                    // 'https://play.google.com/store/apps/details?id=com.test2'
                    imgUrl
                    );
                }} />
    {!isAndroid &&
       
            <View class={tw``}>
                <br></br>

            {/* <Button  style={style.btn }
            title="Go To Our App in play Store "
            onPress={() => {
                Linking.openURL(
                    // 'https://play.google.com/store/apps/details?id=com.test2'
                    imgUrl
                    );
                }

            }
        
            /> */}

            {/* <Button
            title="Go To Our App in App Store "
            onPress={() => {
                Linking.openURL(
                    // 'https://play.google.com/store/apps/details?id=com.test2'
                    imgUrl
                    );
                }
            }
            /> */}
            </View>
            
        }
        </>
  )
}

const style = StyleSheet.create ({
    btn: {
        margin: 10,
        width: 100
    }
})

export default DownloadImage