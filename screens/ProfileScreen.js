// import { View, Text } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useRoute } from '@react-navigation/native'
import {firebase} from '../firebaseConfig'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import { Button } from '@rneui/base'
// const ProfileScreen = () => {
//     const [name, setname] = useState('')

//     const {
//         params: { id, names },
//     }= useRoute()

//     useEffect(() => {
//    firebase.firestore().collection('users')
//     .doc(
//         firebase.auth().currentUser.uid
//     )
//     .get()
//     .then((documentSnapshot) => {
//         if(documentSnapshot.exists){
//             setname(documentSnapshot.data())
//         }else{
//             console.log('does not exist')
//         }
//     }
//     )
//     .catch((error) => {
//         console.log(error)
//     }
//     )
    
    
//   }, []);

//   const changePassword= ()=> {
//     firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
//     .then(() => {
//         console.log('email sent')
//         alert("Password reset email sent")
//     }
//     )
//     .catch((error) => {
//         alert(error)
//     }
//     )

//   }
  

//   console.log(names.firstName)
//   return (
//     <View>
//       <Text>Welcome {names.firstName} </Text>
      
//             <Button
//             onPress={() => {
//                 console.log('logout')
//                 firebase.auth().signOut()
//             }}
//             >
//                 Logout
//             </Button>
          

//             <Button
//             onPress={() => {
//                 console.log('change password')
//                 changePassword()
//             }}
           
//             >
//                 change password
//             </Button>

       


//     </View>
//   )
// }

// export default ProfileScreen
import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const {
            params: { id, names },
        }= useRoute()

        const changePassword= ()=> {
                firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
                .then(() => {
                    console.log('email sent')
                    alert("Password reset email sent")
                }
                )
                .catch((error) => {
                    alert(error)
                }
                )
            
              }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Profile Screen</Text> */}
      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfo}>Name: {names.firstName} {names.lastName}</Text>
        <Text style={styles.userInfo}>Email: {names.email}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Log Out"
          onPress={() => {
            // Handle log out logic here
            firebase.auth().signOut()
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Change Password"
          onPress={() => {
            // Handle change password logic here
             console.log('change password')
                changePassword()
//             }}
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  userInfoContainer: {
    marginTop: 20,
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default ProfileScreen;
