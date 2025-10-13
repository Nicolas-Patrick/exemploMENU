import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import AboutScreen from './screens/AboutScreen'
import ProductScreen from './screens/ProductScreen'

const Stack = createStackNavigator()

export default function AppStack(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name= "Home" component = {HomeScreen} />
        <Stack.Screen name= "Details" component = {DetailsScreen} />
        <Stack.Screen name= "About" component={AboutScreen} />
        <Stack.Screen name= "Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}