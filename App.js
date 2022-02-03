import 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native';
import Screen from './components/Screen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
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
        />
        <Drawer.Screen
          name='Jeep'
          component={Screen}
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
