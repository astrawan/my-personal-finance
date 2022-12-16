import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { Button, IButtonProps, Text } from 'native-base';

export default function CustomButton({ children, ...props }: IButtonProps) {
  return (
    <LinearGradient
      colors={['#12B0F8', '#007AFF']}
      style={{
        borderRadius: 14,
        width: '100%',
      }}
    >
      <Button height={58} variant="ghost" {...props}>
        <Text color="white">{children as React.ReactNode}</Text>
      </Button>
    </LinearGradient>
  );
}
