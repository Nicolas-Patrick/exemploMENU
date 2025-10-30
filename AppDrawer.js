import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import AboutScreen from './screens/AboutScreen'
import CalculadoraScreen from './screens/CalculadoraScreen';
import IMCScreen from './screens/IMCScreen';



const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>

        <Drawer.Screen name="Home" component={HomeScreen}
          options={{
            title: 'Home Page',
            DrawerIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),

          }} />

        <Drawer.Screen
          name='Details'
          component={DetailsScreen}
          options={{
            title: 'Details Page',
            DrawerIcon: ({ color, size }) => (
              <Icon name="details" color={color} size={size} />
            ),

          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: 'About Page',
            DrawerIcon: ({ color, size }) => (
              <Icon name="business" color={color} size={size} />
            ),

          }} />
        <Drawer.Screen
          name="Calculadora"
          component={CalculadoraScreen}
          options={{
            title: 'Calculadora',
            drawerIcon: ({ color, size }) => (
              <Icon name="calculate" color={color} size={size} />
            ),
          }}
        />

        <Drawer.Screen
          name="IMC"
          component={IMCScreen}
          options={{
            title: 'Cálculo de IMC',
            drawerIcon: ({ color, size }) => (
              <Icon name="fitness-center" color={color} size={size} />
            ),
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}