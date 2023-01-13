import React from 'react';

import { Dimensions, ImageBackground, StatusBar, View } from 'react-native';

import { CommonActions } from '@react-navigation/native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Box, Center, Heading, Text, VStack } from 'native-base';

import { RootStackParamList } from '../types';

import CustomButton from '../components/Button';

import Img from '../../assets/kingdom-payment.png';

type GetStartedProps = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;

export default function GetStarted({ navigation }: GetStartedProps) {
  const windowHeight = Dimensions.get('window').height;

  // istanbul ignore next
  const onGetStartedPress = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Home' }],
      }),
    );
  };

  return (
    <VStack>
      <StatusBar barStyle="dark-content" />
      <Center bg="#F7EEFC" h={windowHeight / 2}>
        <ImageBackground
          resizeMethod="auto"
          source={Img}
          style={{
            height: windowHeight / 2,
            width: '100%',
          }}
        />
      </Center>
      <View
        style={{
          backgroundColor: 'white',
          height: 80,
          marginRight: -40,
          marginTop: -40,
          zIndex: -1,
        }}
      >
        <View
          style={{
            backgroundColor: '#F7EEFC',
            borderRadius: 40,
            height: 80,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: '#F7EEFC',
          height: 80,
          marginBottom: -40,
          marginLeft: -40,
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 40,
            height: 80,
          }}
        />
      </View>
      <Center
        bg="white"
        h={windowHeight / 2 - 120}
        paddingLeft={2}
        paddingRight={2}
      >
        <VStack>
          <Center>
            <Heading size="2xl">EXPENIO</Heading>
          </Center>
          <Box flex={1} paddingTop={5}>
            <Text color="#AEAEB2" textAlign="center">
              Going cashless has never been this easier with the world’s most
              leading expense manager.
            </Text>
          </Box>
          <Center>
            <CustomButton onPress={onGetStartedPress}>Get Started</CustomButton>
          </Center>
        </VStack>
      </Center>
    </VStack>
  );
}
