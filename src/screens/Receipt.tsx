import React from 'react';

import { Dimensions, Image, ScrollView, StatusBar } from 'react-native';

import { type NavigationProp, useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import { Box, Button, HStack, Heading, Icon, Text, VStack } from 'native-base';

import ZigZagView from 'react-native-zigzag-view';

import DashedLine from 'react-native-dashed-line';

import { IRootStackParamList } from '../types';

import ButtonX from '../components/Button';

import BarcodeImg from '../../assets/receipt-barcode.png';

import { CurrencyNumberFormat } from '../utils';

export default function Receipt() {
  const navigation = useNavigation<NavigationProp<IRootStackParamList>>();

  const { height: windowHeight } = Dimensions.get('window');

  const onHomePress = () => {
    navigation.navigate('Home');
  };

  return (
    <Box bg="#f9f9fb" safeAreaTop>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={{
          minHeight: windowHeight,
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
              Receipt
            </Heading>
            <Button
              rightIcon={<Icon as={Ionicons} name="share-outline" size="xl" />}
              variant="ghost"
            />
          </HStack>
          <ZigZagView
            backgroundColor="#f9f9fb"
            style={{
              margin: 8,
            }}
            surfaceColor="#f2f2f7"
            top={false}
          >
            <ZigZagView
              backgroundColor="#f2f2f7"
              style={{
                marginLeft: 1,
                marginRight: 1,
                marginTop: 1,
              }}
              surfaceColor="#fff"
              top={false}
            >
              <VStack
                bg="#ffffff"
                borderColor="#f2f2f7"
                borderRadius={4}
                padding={8}
              >
                <Text>22.02.2020</Text>
                <Box alignItems="center" padding={8}>
                  <Heading>CASH RECEIPT</Heading>
                </Box>
                <DashedLine dashLength={5} style={{ width: '100%' }} />
                <VStack
                  alignItems="center"
                  paddingBottom={8}
                  paddingTop={8}
                  space={2}
                >
                  <HStack>
                    <Text flex={1}>Amount</Text>
                    <Text>{CurrencyNumberFormat.format(40.0)}</Text>
                  </HStack>
                  <HStack>
                    <Text flex={1}>Service Fee</Text>
                    <Text>{CurrencyNumberFormat.format(2.82)}</Text>
                  </HStack>
                  <HStack>
                    <Text flex={1}>Internet Charge</Text>
                    <Text>{CurrencyNumberFormat.format(7.18)}</Text>
                  </HStack>
                </VStack>
                <DashedLine dashLength={5} style={{ width: '100%' }} />
                <VStack
                  alignItems="center"
                  paddingBottom={4}
                  paddingTop={4}
                  space={2}
                >
                  <HStack>
                    <Text flex={1}>Total</Text>
                    <Text fontSize={24} fontWeight="bold">
                      {CurrencyNumberFormat.format(50.0)}
                    </Text>
                  </HStack>
                </VStack>
                <DashedLine dashLength={5} style={{ width: '100%' }} />
                <Image
                  source={BarcodeImg}
                  style={{
                    alignSelf: 'center',
                    marginBottom: 40,
                    marginTop: 80,
                  }}
                />
              </VStack>
            </ZigZagView>
          </ZigZagView>
          <ButtonX onPress={onHomePress}>Home</ButtonX>
        </VStack>
      </ScrollView>
    </Box>
  );
}
