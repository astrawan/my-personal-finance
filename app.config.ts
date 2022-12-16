import type { ExpoConfig } from '@expo/config';

const PROJECT_ID = 'b4551f50-cd18-4b7c-b7fa-2a35c7e81315';

const config: ExpoConfig = {
  name: 'my-personal-finance',
  slug: 'my-personal-finance',
  version: '1.0.0',
  orientation: 'portrait',
  owner: 'astrawan',
  platforms: ['android', 'ios'],
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: `https://u.expo.dev/${PROJECT_ID}`,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: false,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  extra: {
    eas: {
      projectId: PROJECT_ID,
    },
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
};

export default config;
