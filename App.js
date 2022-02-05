import 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native';
import Screen from './components/Screen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cart from './components/Cart';
import { useState } from 'react';

const Drawer = createDrawerNavigator();

export default function App() {
  const [inCart, setInCart] = useState([])

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Tesla'
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right',
          drawerStyle: {backgroundColor: '#171A20CC'},
          drawerLabelStyle: {color: '#FFFFFF'}
        }}
      >
        <Drawer.Screen
          name='Tesla'
          component={Screen}
          initialParams={{make: 'Tesla', setInCart: setInCart, inCart: inCart}}
        />
        <Drawer.Screen
          name='Jeep'
          component={Screen}
          initialParams={{make: 'Jeep', setInCart: setInCart, inCart: inCart}}
        />
        <Drawer.Screen
          name='Cart'
          component={Cart}
          options={{drawerItemStyle: {height: 0}}}
          initialParams={{inCart: inCart, setInCart: setInCart}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  drawer: {
    backgroundColor: 'black'
  }
});
