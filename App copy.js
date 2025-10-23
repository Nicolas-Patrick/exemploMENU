import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import AboutScreen from './screens/AboutScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>

        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            title: 'Home Page',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
            
          }} />

        <Tab.Screen
          name='Details'
          component={DetailsScreen}
          options={{ 
            title: 'Details Page',
            tabBarIcon: ({ color, size }) => (
              <Icon name="details" color={color} size={size} />
            ),
          
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{ 
            title: 'About Page',
            tabBarIcon: ({ color, size }) => (
              <Icon name="business" color={color} size={size} />
            ),
            
            }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}