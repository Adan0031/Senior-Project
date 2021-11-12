// This seems to work when dealing with modules that give error
// SyntaxError: Cannot use import statement outside a module

//        5 |     Platform
//        6 | } from 'react-native';
//     >  7 | import  { LinearGradient } from "expo-linear-gradient";
//          | ^

const expoPreset = require('jest-expo/jest-preset');

module.exports = {
   ...expoPreset,
   preset: "@testing-library/react-native",
}
