import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PieceScreen from './screens/PieceScreen';
import PiecesByCategoryScreen from './screens/PiecesByCategoryScreen';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="piece" component={PieceScreen} />
        <Stack.Screen name="PiecesByCategory" component={PiecesByCategoryScreen} />
        </Stack.Navigator>
        </NavigationContainer>
  );
}