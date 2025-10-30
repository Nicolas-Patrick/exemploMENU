import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AboutScreen from './screens/AboutScreen';
import IMCScreen from './screens/IMCScreen';
import CalculadoraScreen from './screens/CalculadoraScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: true }}>

        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            )
          }}
        />

        <Tab.Screen 
          name="Details" 
          component={DetailsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="details" color={color} size={size} />
            )
          }}
        />

        <Tab.Screen 
          name="About" 
          component={AboutScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="business" color={color} size={size} />
            )
          }}
        />

        <Tab.Screen 
          name="Calculadora" 
          component={CalculadoraScreen}
          options={{
            title: 'Calcular',
            tabBarIcon: ({ color, size }) => (
              <Icon name="calculate" color={color} size={size} />
            )
          }}
        />

        <Tab.Screen 
          name="IMC" 
          component={IMCScreen}
          options={{
            title: 'IMC',
            tabBarIcon: ({ color, size }) => (
              <Icon name="fitness-center" color={color} size={size} />
            )
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
