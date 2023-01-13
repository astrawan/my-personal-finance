// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('native-base/lib/commonjs/core/hybrid-overlay/HybridProvider', () => {
  const r = jest.requireActual('react-native');
  return r.View;
});
jest.mock('native-base/lib/commonjs/utils/useKeyboardBottomInset');

jest.mock('@expo/vector-icons/build/Ionicons', () => 'Ionicons');
