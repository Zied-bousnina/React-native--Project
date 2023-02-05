import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PieceScreen from './screens/PieceScreen';
import PiecesByCategoryScreen from './screens/PiecesByCategoryScreen';
import LoginScreen from './screens/LoginScreen';

import { useEffect, useState } from 'react';
// import firebase  from 'firebase';
// import {config} from './firebaseConfig'
import firebase from 'firebase/compat/app'
import Header from './components/LoginV2/Header';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  const [Initializing, setInitializing] = useState(true)
  const [User, setUser] = useState()
  
  function onAuthStateChanged(user) {
    setUser(user)
    if(Initializing) setInitializing(false);
  }

  useEffect(() => {
   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  
    
  }, []);

  if(Initializing) return null;
  if(!User) {
    return (
      <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} 
        options={{
       
          headerTitle: ()=> <Header name="Login"/>,
          headerStyle: {
            backgroundColor: '#00e4d0',
            shadowColor: '#000',
            elevation: 15,
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50,
            height:150
          }
        }}
        />
           <Stack.Screen name="RegisterScreen" component={RegisterScreen} 
        options={{
          headerTitle: ()=> <Header name="Register"/>,
          headerStyle: {
            backgroundColor: '#00e4d0',
            shadowColor: '#000',
            elevation: 15,
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50,
            height:150
          }
        }}
        />
        
        
      
      </Stack.Navigator>
        </NavigationContainer>
    )

  }

  

  return (

    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   headerShown: false
        // }}
        initialRouteName="Home"
      >
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="piece" component={PieceScreen} />
        <Stack.Screen name="PiecesByCategory" component={PiecesByCategoryScreen} />
        </Stack.Navigator>
        </NavigationContainer>
  );
}