import React from 'react';

import { NativeBaseProvider, type NativeBaseProviderProps } from 'native-base';

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

export default function Wrapper({
  children,
  ...props
}: NativeBaseProviderProps) {
  return (
    <NativeBaseProvider initialWindowMetrics={inset} {...props}>
      {children}
    </NativeBaseProvider>
  );
}
