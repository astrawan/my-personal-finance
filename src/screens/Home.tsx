import React from 'react';

import { Dimensions, ScrollView, StatusBar } from 'react-native';

import { type NavigationProp, useNavigation } from '@react-navigation/native';

import {
  Avatar,
  Box,
  Button,
  Center,
  ChevronRightIcon,
  HStack,
  Heading,
  Pressable,
  Text,
  VStack,
} from 'native-base';

import { LineChart } from 'react-native-chart-kit';
import type { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';

import { IRootStackParamList } from '../types';

import Fab from '../components/Fab';

import ProfileImg from '../../assets/profile.jpeg';
import NikeLogoImg from '../../assets/nike.png';
import appleLogoImg from '../../assets/apple.png';
import uberLogoImg from '../../assets/uber.png';

import { CurrencyNumberFormat } from '../utils';

const chartData: LineChartData = {
  datasets: [
    { data: [50, 20, 30, 10, 60, 40] },
    { data: [20, 50, 10, 30, 40, 60] },
  ],
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
};

const walletData = [
  {
    amount: -243.0,
    datetime: '2020-08-15T00:00:00',
    description: 'Nike Air Max 2090',
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    tags: ['nike'],
  },
  {
    amount: -799.0,
    datetime: '2020-08-10T00:00:00',
    description: 'iPad Prop 2020',
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    tags: ['apple'],
  },
  {
    amount: 50.0,
    datetime: '2020-03-05T00:00:00',
    description: 'Uber',
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    tags: ['uber'],
  },
];

export default function Home() {
  const { height: windowHeight, width: windowWidth } = Dimensions.get('window');
  const borderRadius = 24;
  const padding = 20;

  const navigation = useNavigation<NavigationProp<IRootStackParamList>>();

  const onFabPress = () => {
    navigation.navigate('Payment');
  };
  const onSeeAllWalletPress = () => {
    navigation.navigate('Wallet');
  };

  return (
    <Box safeAreaTop>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={{
          minHeight: windowHeight - 75,
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
          <Box>
            <Text color="#bcbcbc" fontSize="lg">
              Hello, Maria
            </Text>
            <HStack>
              <Heading flex={1} size="2xl">
                Home
              </Heading>
              <Avatar source={ProfileImg} />
            </HStack>
          </Box>
          <Pressable
            bg="rgba(0, 122, 255, 0.6)"
            borderRadius={borderRadius}
            height={110}
            onPress={() => navigation.navigate('Wallet')}
            padding={4}
          >
            <HStack>
              <Box flex={1}>
                <Text color="#fff">My Balance</Text>
                <Heading color="#fff" size="2xl">
                  {CurrencyNumberFormat.format(25520.0)}
                </Heading>
              </Box>
              <Box justifyContent="center">
                <ChevronRightIcon color="#fff" size={6} />
              </Box>
            </HStack>
          </Pressable>
          <Box
            bg="rgba(235, 212, 247, 1)"
            borderRadius={borderRadius}
            height={234}
            padding={4}
          >
            <Heading size="lg">Expenses</Heading>
            <LineChart
              data={chartData}
              width={windowWidth}
              height={180}
              chartConfig={{
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                color: (opacity = 1) => `rgba(175, 82, 222, ${opacity})`,
                propsForHorizontalLabels: {
                  fill: '#bcbcbc',
                  fontWeight: 'bold',
                },
                propsForVerticalLabels: {
                  fill: '#bcbcbc',
                  fontWeight: 'bold',
                },
              }}
              style={{
                borderRadius,
                marginLeft: -40,
              }}
              bezier
              withHorizontalLabels={false}
              withHorizontalLines={false}
              withVerticalLines={false}
            />
          </Box>
          <Center marginTop={-10} zIndex={-1}>
            <Box
              bg="rgba(231, 203, 245, 1)"
              borderRadius={40}
              height={8}
              width={windowWidth - padding * 2 - borderRadius * 2}
            />
          </Center>
          <VStack space={4} marginBottom={10}>
            <HStack>
              <Heading flex={1} size="lg" alignSelf="center">
                Wallet
              </Heading>
              <Button onPress={onSeeAllWalletPress} variant="link">
                <Text fontSize="md" color="#007AFF">
                  See all
                </Text>
              </Button>
            </HStack>
            {walletData.map((item) => {
              let img;

              if (Array.isArray(item.tags)) {
                if (item.tags.indexOf('nike') > -1) {
                  img = NikeLogoImg;
                } else if (item.tags.indexOf('apple') > -1) {
                  img = appleLogoImg;
                } else if (item.tags.indexOf('uber') > -1) {
                  img = uberLogoImg;
                }
              }
              return (
                <HStack key={item.id} space={4}>
                  <Avatar backgroundColor="#f2f2f2" source={img} />
                  <VStack flex={1}>
                    <Text fontSize="md">{item.description}</Text>
                    <Text color="#bcbcbc">{item.datetime}</Text>
                  </VStack>
                  <Text fontSize="md">
                    {CurrencyNumberFormat.format(item.amount)}
                  </Text>
                </HStack>
              );
            })}
          </VStack>
        </VStack>
      </ScrollView>
      <Fab onPress={onFabPress} />
    </Box>
  );
}
