/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeopleListing from './app/screens/PeopleListing';
import PersonDetails from './app/screens/PersonDetails';
import config from './config';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PeopleListing"
          component={PeopleListing}
          options={{
            title: 'People of Star Wars', 
            headerStyle: {
              backgroundColor: config.headerBackgroundColor,
            },
            headerTintColor: config.headerTextColor,
          }}
        />
        <Stack.Screen name="PersonDetails" 
          component={PersonDetails} 
          options={{
            title: 'Person Details'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
