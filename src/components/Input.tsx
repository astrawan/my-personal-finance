import React from 'react';

import { IInputProps, Input } from 'native-base';

export default function CustomInput(props: IInputProps) {
  return (
    <Input
      backgroundColor="#f9f9fb"
      style={{
        height: 48,
      }}
      variant="unstyled"
      {...props}
    />
  );
}
