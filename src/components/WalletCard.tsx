import React from 'react';

import { Image, ImageBackground, type ImageSourcePropType } from 'react-native';

import { Box, HStack, Text, VStack } from 'native-base';

import CardBgImg from '../../assets/card-background.png';

import VisaLogoImg from '../../assets/visa.png';

import { CurrencyNumberFormat } from '../utils';

/* eslint-disable react/no-unused-prop-types */
interface IWalletCardProps {
  balance: number;
  cardHolderName?: string;
  cardLogoImageSource?: ImageSourcePropType;
  cardNumber?: string;
  expiryMonth?: number;
  expiryYear?: number;
}
/* eslint-enable react/no-unused-prop-types */

const currentDate = new Date();

const defaultProps: Partial<IWalletCardProps> = {
  cardHolderName: 'Dwayne Johnson',
  cardLogoImageSource: VisaLogoImg,
  cardNumber: '4225 9765 0008 6141',
  expiryMonth: currentDate.getMonth() + 1,
  expiryYear: currentDate.getFullYear() + 2,
};

export default function WalletCard(props: IWalletCardProps) {
  const others: IWalletCardProps = { ...defaultProps, ...props };
  const {
    balance,
    cardHolderName,
    cardLogoImageSource,
    cardNumber,
    expiryMonth,
    expiryYear,
  } = others;

  return (
    <VStack bg="#000" borderRadius={16} height={194} overflow="hidden">
      <ImageBackground
        source={CardBgImg}
        style={{
          flex: 1,
          padding: 18,
        }}
      >
        <HStack alignItems="center" justifyContent="center">
          <VStack flex={1}>
            <Text color="#fff">{balance !== undefined ? 'BALANCE' : ' '}</Text>
            <Text color="#fff">{CurrencyNumberFormat.format(balance)}</Text>
          </VStack>
          <Image source={cardLogoImageSource} />
        </HStack>
        <Box flex={1} justifyContent="center">
          <Text color="#fff" fontSize="2xl">
            {cardNumber}
          </Text>
        </Box>
        <HStack alignItems="flex-end" justifyContent="flex-end">
          <Text color="#fff" flex={1}>
            {cardHolderName?.toUpperCase()}
          </Text>
          <VStack alignItems="center">
            <Text color="#fff">EXPIRY</Text>
            <Text color="#fff">
              {expiryMonth && String(expiryMonth).padStart(2, '0')}/
              {expiryYear && String(expiryYear % 2000).padStart(2, '0')}
            </Text>
          </VStack>
        </HStack>
      </ImageBackground>
    </VStack>
  );
}

WalletCard.defaultProps = defaultProps;
