import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames'
import { useState } from 'react';
import { firebase} from '../firebaseConfig'

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const loginUser = (email, password)=>{
        if(email && password){
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential)=>{
                if(userCredential){
                    navigation.navigate('Home')
                }
            })
            .catch((error)=>{
                alert(error.message)
            })
        }
        else{
            alert('Enter email and password')
        }
    }

    // const loginUser = async (email, password)=> {
    //     if(email && password){
    //         try{
    //             const response = await firebase.auth().signInWithEmailAndPassword(email, password)
    //             if(response){
    //                 this.props.navigation.navigate('Home')
    //             }
    //         }
    //         catch(error){
    //            alert(error.message)
    //         // alert("teeeeeeeeeeee")
    //            console.log(error.message)
    //         }
    //     }
    //     else{
    //         alert('Enter email and password')
    //     }
    // }

    const  forgetPassword = ()=> {
        if(email){
            firebase.auth().sendPasswordResetEmail(email)
            .then(()=>{
                alert('Check your email...')
            })
            .catch((error)=>{
                alert(error.message)
            })
        }
        else{
            alert('Enter email')
        }
    }
  return (
    <View style={styles.container} >
      <Text style={{fonstweight:'bold', fontSize:26}} >LoginScreen</Text>
      <View style={{marginTop:40}}>
        <TextInput style={styles.textInput} 
        placeholder='Email'
        value={email}
        onChangeText={(text)=>setemail(text)}
        autoCapitalize='none'
        autoCorrect={false}
        onSubmitEditing={()=>{
            this.passwordInput.focus()
        }
        }
        
        
        />
        <TextInput style={styles.textInput}
        placeholder='Password'
        value={password}
        onChangeText={(text)=>setpassword(text)}
        secureTextEntry={true}
        autoCapitalize='none'
        autoCorrect={false}
        // ref={(input)=>this.passwordInput = input}
        />
        <TouchableOpacity style={styles.button}
        onPress={()=>loginUser(email, password)}
        >
            <Text style={{fontWeight:'bold', fontSize:22}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:20}}
        onPress={()=>navigation.navigate('RegisterScreen')}
        >
            <Text style={{fontWeight:'bold', fontSize:16, marginLeft:16}}>
                Don't have an account? Register Now
            </Text>
        </TouchableOpacity> 
        <TouchableOpacity style={{marginTop:20}}
        onPress={()=>{forgetPassword()}}
        >
            <Text style={{fontWeight:'bold', fontSize:16, marginLeft:16}}>
                Forget Password? Reset Now
            </Text>
        </TouchableOpacity> 
        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ecf0f1',
        marginTop: 100
    },
    textInput:{
        paddingTop:20,
        paddingBottom:10,
        width:400,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:'#000',
        marginBottom:10,
        textAlign: 'center'
    },
    button : {
      
        marginTop: 50,
        height:70,
        width:250,
        backgroundColor:'#026efd',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        // shadowColor: '#000',
        // shadowOffset: {width:0, height:2},
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 1
        marginLeft: 75

    

    }
})


export default LoginScreen