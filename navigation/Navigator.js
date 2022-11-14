import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/HomeScreen';
import Book from '../screens/BookScreen';

const Stack = createStackNavigator();

export default function MyBookApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Book" component={Book} />
    </Stack.Navigator>
  );
}