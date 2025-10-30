import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Telas
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AboutScreen from './screens/AboutScreen';
import CalculadoraScreen from './screens/CalculadoraScreen';
import IMCScreen from './screens/IMCScreen';


// ✅ Tabs -> Home, Detalhes, Calculadora, IMC
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          )
        }}
      />

      <Tab.Screen
        name="DetailsTab"
        component={DetailsScreen}
        options={{
          title: 'Detalhes',
          tabBarIcon: ({ color, size }) => (
            <Icon name="details" color={color} size={size} />
          )
        }}
      />

      <Tab.Screen
        name="CalculadoraTab"
        component={StackRoutes} // ✅ agora usa Stack
        options={{
          title: 'Calculadora',
          tabBarIcon: ({ color, size }) => (
            <Icon name="calculate" color={color} size={size} />
          )
        }}
      />

      <Tab.Screen
        name="IMCTab"
        component={IMCScreen}
        options={{
          title: 'IMC',
          tabBarIcon: ({ color, size }) => (
            <Icon name="fitness-center" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}


// ✅ Stack -> Calculadora → IMC
const Stack = createStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CalculadoraStack"
        component={CalculadoraScreen}
        options={{ title: "Calculadora" }}
      />
      <Stack.Screen
        name="IMCStack"
        component={IMCScreen}
        options={{ title: "Cálculo IMC" }}
      />
    </Stack.Navigator>
  );
}


// ✅ Drawer Principal
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeDrawer">

        {/* Tabs com todas as funções */}
        <Drawer.Screen
          name="HomeDrawer"
          component={TabRoutes}
          options={{
            title: 'Home',
            drawerIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            )
          }}
        />

        {/* Acesso direto à Calculadora com Stack */}
        <Drawer.Screen
          name="Calculadora"
          component={StackRoutes}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="calculate" color={color} size={size} />
            )
          }}
        />

        <Drawer.Screen
          name="IMC"
          component={IMCScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="fitness-center" color={color} size={size} />
            )
          }}
        />

        <Drawer.Screen
          name="Sobre"
          component={AboutScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="info" color={color} size={size} />
            )
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
