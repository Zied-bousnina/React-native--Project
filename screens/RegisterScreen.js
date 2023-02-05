import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {firebase} from '../firebaseConfig'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')

  const navigation = useNavigation();

const registerUser = async (email, password, firstName, lastName)=> {
  if(email && password && firstName && lastName){
    if(password.length <6) alert("password must be at least 6 char")
  
 await firebase.auth().createUserWithEmailAndPassword(email, password)
 .then(()=>{
  firebase.auth().currentUser.sendEmailVerification({
    handleCodeInApp: true,
    url: 'https://l-art-numerique.firebaseapp.com',
    onSuccess: ()=>{
      alert('Verification email sent')
    },
    onFailure: (error)=> {
      alert(error.message)
      // alert("email")


    }
    })
    .then(()=>{
      alert('Verification email sent')

  }).catch((error)=> {
    alert(error.message)
  })
  .then(()=> {
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid)
    .set({
      firstName,
      lastName,
      email,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .catch((error)=> {
      alert("heeeeeeeeeeeeey"+error.message)
    })
  })
  .catch((error)=> {
    alert(error.message)
  })
 }).catch((error)=>{
  alert(error.message)
 })

}
}
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold', fontSize:23}} >
        Register Here !!

      </Text>
      <View style={{marginTop:40}}>
        <TextInput style={styles.textInput}
        placeholder='First Name'
        value={firstName}
        onChangeText={(text)=>setfirstName(text)}
        autoCapitalize='none'
        autoCorrect={false}
        onSubmitEditing={()=>{  
            this.lastNameInput.focus()
        }
        }
        />
        <TextInput style={styles.textInput}
        placeholder='Last Name'
        value={lastName}
        onChangeText={(text)=>setlastName(text)}
        autoCapitalize='none'
        autoCorrect={false}
        onSubmitEditing={()=>{
            this.emailInput.focus()
        }
        }
        />
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
        <TouchableOpacity style={styles.button} onPress={()=>registerUser(email, password, firstName, lastName)} >
          <Text style={{color:'white', fontWeight:'bold', fontSize:22}} >Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:20}} onPress={()=>navigation.navigate('Login')} >
          <Text style={{fontWeight:'bold', fontSize:16,marginLeft:16}}>Already have an account ? Login</Text>
        </TouchableOpacity>
        </View>
        
      {/* </View> */}

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


export default RegisterScreen