import 'react-native-gesture-handler/jestSetup';
import { LinearGradient } from 'expo-linear-gradient';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
//jest.mock()

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

