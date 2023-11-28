import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './navigation/screens/HomeScreen';
import AboutScreen from './navigation/screens/AboutScreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function Options() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={
        { title: 'Welcome Home',
        headerStyle: {
          backgroundColor: '#6a51ae',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerRight: () => (
          <Pressable onPress={()=> alert('menu button pressed')}>
            <Text style={{color: '#fff', fontSize: 16}}>Menu</Text>
          </Pressable>
        ),
        contentStyle: {
          backgroundColor: '#e8Bef3'
        }
      }
      } />
      <Stack.Screen name="About" component={AboutScreen} initialParams={{name: 'Guest'}} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}