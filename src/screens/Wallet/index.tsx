import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import {
  Avatar,
  Box,
  Button,
  ChevronLeftIcon,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from 'native-base';

import Swiper from 'react-native-swiper';

import Modal from 'react-native-modalbox';

import { RootStackParamList } from '../../types';

import WalletCard from '../../components/WalletCard';

import AddNewCard from './AddNewCard';

import Ads01Img from '../../../assets/ads01.png';

import NikeLogoImg from '../../../assets/nike.png';
import AppleLogoImg from '../../../assets/apple.png';
import UberLogoImg from '../../../assets/uber.png';

import { CurrencyNumberFormat } from '../../utils';

interface IWalletData {
  id: string;
  description: string;
  datetime: string;
  amount: number;
  tags: Array<string>;
}

type WalletProps = NativeStackScreenProps<RootStackParamList, 'Wallet'>;

const walletData: Array<IWalletData> = [
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

export default function Wallet({ navigation }: WalletProps) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const { height: windowHeight } = Dimensions.get('window');

  // istanbul ignore next
  const onAddNewCardPress = () => {
    setModalIsOpen(true);
  };
  // istanbul ignore next
  const onBackPress = () => {
    navigation.goBack();
  };
  // istanbul ignore next
  const onModalClose = () => {
    setModalIsOpen(false);
  };
  // istanbul ignore next
  const onModalClosed = () => {
    if (modalIsOpen) setModalIsOpen(false);
  };

  return (
    <>
      <Box safeAreaTop>
        <StatusBar barStyle="dark-content" />
        <HStack>
          <Button
            leftIcon={<ChevronLeftIcon />}
            onPress={onBackPress}
            size="lg"
            variant="ghost"
          >
            Back
          </Button>
        </HStack>
        <ScrollView style={{ paddingLeft: 20, paddingRight: 20 }}>
          <VStack space={4}>
            <HStack>
              <Heading flex={1} size="2xl">
                Wallet
              </Heading>
              <Button
                onPress={onAddNewCardPress}
                rightIcon={
                  <Icon as={Ionicons} name="add-circle-outline" size="xl" />
                }
                variant="ghost"
              />
            </HStack>
            <Swiper height={240} loop={false}>
              <WalletCard balance={50000} />
              <WalletCard balance={50000} />
              <WalletCard balance={50000} />
            </Swiper>
            <Box
              borderRadius={16}
              flexDirection="column"
              height={237}
              marginTop={-6}
              overflow="hidden"
            >
              <ImageBackground
                source={Ads01Img}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              >
                <Box padding={6} width="70%">
                  <Text color="#D57049" fontWeight="bold">
                    POPULAR
                  </Text>
                  <Text color="#6B3018" fontSize="lg" fontWeight="bold">
                    Get upto 15% cashback on clothings and apparels
                  </Text>
                </Box>
              </ImageBackground>
            </Box>
            <VStack
              space={4}
              style={{
                paddingBottom: 64,
              }}
            >
              <Heading flex={1} size="lg">
                Transactions
              </Heading>
              {walletData.map((item) => {
                let img;

                // istanbul ignore next
                if (Array.isArray(item.tags)) {
                  if (item.tags.indexOf('nike') > -1) {
                    img = NikeLogoImg;
                  } else if (item.tags.indexOf('apple') > -1) {
                    img = AppleLogoImg;
                  } else if (item.tags.indexOf('uber') > -1) {
                    img = UberLogoImg;
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
      </Box>
      <Modal
        isOpen={modalIsOpen}
        onClosed={onModalClosed}
        position="bottom"
        style={{
          height: windowHeight * 0.86,
        }}
        swipeToClose={false}
      >
        <AddNewCard onClose={onModalClose} />
      </Modal>
    </>
  );
}

export { AddNewCard };
