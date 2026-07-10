import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import WelcomeScreen from '../screens/WelcomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import UsuarioScreen from '../screens/UsuarioScreen';
import SuscripcionesScreen from '../screens/SuscripcionesScreen';

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

// TOP TABS
function MyTopTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="Pokemon"
        component={PokemonScreen}
      />

      <TopTab.Screen
        name="Usuarios"
        component={UsuarioScreen}
      />

      <TopTab.Screen
        name="Suscripciones"
        component={SuscripcionesScreen}
      />
    </TopTab.Navigator>
  );
}

// STACK
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
      />

      <Stack.Screen
        name="TopTabs"
        component={MyTopTabs}
      />
    </Stack.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}