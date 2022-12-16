import React from 'react';

import { Platform } from 'react-native';

import { type NavigationProp, useNavigation } from '@react-navigation/native';

import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
} from 'native-base';

import Swiper from 'react-native-swiper';

import { IRootStackParamList } from '../types';

import CustomButton from '../components/Button';
import Input from '../components/Input';
import WalletCard from '../components/WalletCard';

import ProfileImg from '../../assets/profile-payment.jpeg';

import { CurrencyNumberFormat } from '../utils';

export default function Payment() {
  const navigation = useNavigation<NavigationProp<IRootStackParamList>>();

  const onCancelPress = () => {
    navigation.goBack();
  };
  const onPayNowPress = () => {
    navigation.navigate('Receipt');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
      }}
    >
      <HStack height={24} safeAreaTop>
        <Box flex={1} />
        <Button onPress={onCancelPress} size="lg" variant="ghost">
          Cancel
        </Button>
      </HStack>
      <ScrollView
        style={{
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <VStack
          space={4}
          style={{
            paddingBottom: 64,
          }}
        >
          <HStack>
            <Heading flex={1} size="2xl">
              Payment
            </Heading>
          </HStack>
          <Center>
            <Avatar size="lg" source={ProfileImg} />
          </Center>
          <Center>
            <Text color="#bcbcbc" fontWeight="bold">
              PAYING
            </Text>
            <Text>Robert Downey, Jr.</Text>
          </Center>
          <Center>
            <Text fontSize={64} fontWeight="bold">
              {CurrencyNumberFormat.format(50.0)}
            </Text>
          </Center>
          <Input placeholder="Add a note" size="lg" />
          <Swiper height={240} loop={false}>
            <WalletCard balance={50000} />
            <WalletCard balance={50000} />
            <WalletCard balance={50000} />
          </Swiper>
          <CustomButton onPress={onPayNowPress}>Pay now</CustomButton>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
