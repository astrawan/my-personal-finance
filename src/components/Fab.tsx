import React from 'react';

import { AddIcon, type IPressableProps, Pressable } from 'native-base';
import { Circle, RadialGradient, Stop, Svg } from 'react-native-svg';

type FabProps = Omit<IPressableProps, 'children'>;

export default function Fab(props: FabProps) {
  const [fabPressed, setFabPressed] = React.useState(false);

  return (
    <Pressable
      onPressIn={/* istanbul ignore next */ () => setFabPressed(true)}
      onPressOut={/* istanbul ignore next */ () => setFabPressed(false)}
      style={{
        alignItems: 'center',
        borderRadius: 9999,
        bottom: 16,
        elevation: 3,
        flexDirection: 'row',
        height: 75,
        justifyContent: 'center',
        padding: 24,
        position: 'absolute',
        right: 16,
        shadowColor: '#000000',
        shadowOffset: {
          height: 1,
          width: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        width: 75,
        zIndex: 20,
      }}
      {...props}
    >
      <AddIcon color="#fff" position="absolute" size="lg" zIndex={20} />
      <Svg fill="none" height={75} width={75}>
        <Circle cx="37.5" cy="37.5" r="37.5" fill="url(#grad)" />
        <RadialGradient
          id="grad"
          cx="0"
          cy="0"
          r="1"
          gradientTransform={
            'translate(21.5 20.5) ' +
            'rotate(45.3351) ' +
            'scale(60.4587 57.9018)'
          }
          gradientUnits="userSpaceOnUse"
        >
          <Stop
            offset="0%"
            stopColor={
              /* istanbul ignore next */ fabPressed ? '#007AFF' : '#7DD4FB'
            }
            stopOpacity="1"
          />
          <Stop
            offset="100%"
            stopColor={
              /* istanbul ignore next */ fabPressed ? '#7DD4FB' : '#007AFF'
            }
            stopOpacity="1"
          />
        </RadialGradient>
      </Svg>
    </Pressable>
  );
}
