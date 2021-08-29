import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeopleListing from './app/screens/PeopleListing';
import PersonDetails from './app/screens/PersonDetails';
import config from './config';
import { ApolloProvider } from '@apollo/client'
import { client } from './app/graphql/Client';
import CustomLoader from './app/ui/CustomLoader';

//Creating the stack navigator const
const Stack = createNativeStackNavigator();

export default function App(){

  return (
    <ApolloProvider client={client}>
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
              title: '', 
              headerStyle: {
                backgroundColor: config.headerBackgroundColor,
              },
              headerTintColor: config.headerTextColor,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};