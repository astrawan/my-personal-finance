import React from 'react';

import { Image, Platform } from 'react-native';

import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Icon,
  KeyboardAvoidingView,
  QuestionOutlineIcon,
  ScrollView,
  Text,
  VStack,
} from 'native-base';

import { Ionicons } from '@expo/vector-icons';

import { TextInputMask } from 'react-native-masked-text';

import ButtonX from '../../components/Button';
import CustomInput from '../../components/Input';
import WalletCard from '../../components/WalletCard';

import MasterCardImg from '../../../assets/master-card.png';

/* eslint-disable react/no-unused-prop-types */
interface IAddNewCard {
  onClose?: () => void;
}
/* eslint-enable react/no-unused-prop-types */

const defaultProps: Partial<IAddNewCard> = {
  onClose: () => {},
};

export default function AddNewCard(props: IAddNewCard) {
  const others = { ...defaultProps, ...props };
  const { onClose } = others;

  const [closeButtonPressed, setCloseButtonPressed] = React.useState(false);
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [CVV, setCVV] = React.useState('');

  const onClosePress = () => {
    onClose?.();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        backgroundColor: '#fff',
        borderRadius: 16,
        marginTop: -16,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
      }}
    >
      <Center height={16}>
        <Heading>Add new card</Heading>
        <Button
          alignSelf="flex-end"
          backgroundColor={
            !closeButtonPressed
              ? 'rgba(118, 118, 128, 0.12)'
              : 'rgba(118, 118, 128, 0.3)'
          }
          borderRadius="9999"
          borderWidth={0}
          height={10}
          onPress={onClosePress}
          onPressIn={() => setCloseButtonPressed(true)}
          onPressOut={() => setCloseButtonPressed(false)}
          position="absolute"
          variant="ghost"
          width={10}
        >
          <Icon as={Ionicons} name="close" size="lg" />
        </Button>
      </Center>
      <ScrollView>
        <VStack space={6}>
          <WalletCard cardLogoImageSource={MasterCardImg} />
          <VStack space={2}>
            <Text fontSize="md" fontWeight="bold">
              Card holder&apos;s name
            </Text>
            <CustomInput placeholder="Dwayne Johnson" size="lg" />
          </VStack>
          <VStack space={2}>
            <Text fontSize="md" fontWeight="bold">
              Card number
            </Text>
            <HStack
              style={{
                backgroundColor: '#f9f9fb',
                borderRadius: 4,
                height: 48,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 8,
              }}
            >
              <TextInputMask
                type="credit-card"
                options={{
                  issuer: 'visa-or-mastercard',
                  obfuscated: false,
                }}
                onChangeText={setCardNumber}
                placeholder="4225 9765 0008 6141"
                style={{
                  color: '#171717',
                  flex: 1,
                  fontSize: 16,
                }}
                value={cardNumber}
              />
              <Image source={MasterCardImg} style={{ alignSelf: 'center' }} />
            </HStack>
          </VStack>
          <HStack space={4}>
            <VStack flex={1} space={2}>
              <Text fontSize="md" fontWeight="bold">
                Expiry Date
              </Text>
              <HStack
                style={{
                  backgroundColor: '#f9f9fb',
                  borderRadius: 4,
                  height: 48,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingTop: 8,
                }}
              >
                <TextInputMask
                  type="datetime"
                  options={{
                    format: 'MM / YY',
                  }}
                  onChangeText={setExpiryDate}
                  placeholder="09 / 24"
                  style={{
                    color: '#171717',
                    flex: 1,
                    fontSize: 16,
                  }}
                  value={expiryDate}
                />
              </HStack>
            </VStack>
            <VStack flex={1} space={2}>
              <Text fontSize="md" fontWeight="bold">
                CCV
              </Text>
              <HStack
                style={{
                  backgroundColor: '#f9f9fb',
                  borderRadius: 4,
                  height: 48,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingTop: 8,
                }}
              >
                <TextInputMask
                  type="custom"
                  keyboardType="numeric"
                  options={{
                    mask: '999',
                  }}
                  onChangeText={setCVV}
                  placeholder="722"
                  style={{
                    color: '#171717',
                    flex: 1,
                    fontSize: 16,
                  }}
                  value={CVV}
                />
                <QuestionOutlineIcon
                  size="lg"
                  style={{
                    alignSelf: 'center',
                  }}
                />
              </HStack>
            </VStack>
          </HStack>
          <ButtonX onPress={onClose}>Add new card</ButtonX>
          <Box height={16} />
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

AddNewCard.defaultProps = defaultProps;
