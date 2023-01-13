import type { Config } from '@jest/types';

// By default, all files inside `node_modules` are not transformed. But some 3rd party
// modules are published as untranspiled, Jest will not understand the code in these modules.
// To overcome this, exclude these modules in the ignore pattern.

const untranspiledModulePatterns = [
  '((jest-)?react-native',
  '@react-native(-community)?)',
  'expo(nent)?',
  '@expo(nent)?/.*',
  '@expo-google-fonts/.*',
  'react-navigation',
  '@react-navigation/.*',
  '@unimodules/.*',
  'unimodules',
  'sentry-expo',
  'native-base',
  'react-native-svg',
];

const config: Config.InitialOptions = {
  projects: [
    {
      preset: 'jest-expo/android',
      setupFiles: ['<rootDir>/jest.setup.ts'],
    },
    {
      preset: 'jest-expo/ios',
      setupFiles: ['<rootDir>/jest.setup.ts'],
    },
  ],
  testMatch: [
    '**/__tests__/**/*[.-]test.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  transformIgnorePatterns: [
    `node_modules/(?!${untranspiledModulePatterns.join('|')})`,
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};

export default config;
