import React from 'react';

import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Box } from 'native-base';

import { GetStarted, Home, Payment, Receipt, Wallet } from '../screens';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="GetStarted"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Receipt"
        component={Receipt}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function Root() {
  return (
    <NavigationContainer>
      <Box flex={1} width="100%">
        <StatusBar
          backgroundColor="rgba(0,0,0,0)"
          barStyle="dark-content"
          translucent
        />
        <RootStack />
      </Box>
    </NavigationContainer>
  );
}
