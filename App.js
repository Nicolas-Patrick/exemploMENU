import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import AboutScreen from './screens/AboutScreen'
import ProductScreen from './screens/ProductScreen'

const Tab = createBottomTabNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name= "Home" component = {HomeScreen} />
        <Tab.Screen name= "Details" component = {DetailsScreen} />
        <Tab.Screen name= "About" component={AboutScreen} />
        <Tab.Screen name= "Product" component={ProductScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}