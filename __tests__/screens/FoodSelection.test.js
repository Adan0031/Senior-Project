import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import FoodSelection from '../../screens/Food/FoodSelection';
import { interpolate } from 'react-native-reanimated';

// Dummy Data Used for Testing FlatList Component in Home Screen 
const DATA = [
    {
        id: 2,
        name: "Tacobell",
        description: "tacos",
        address: "1804 W University Dr",
        distance: "12-15min - $1.99 Delivery",
        image: require("../../assets/dummyData/tacobell.png")  
    },
    {
        id: 1,
        name: "Milkflower",
        description: "Italian Pizza",
        distance: "12-15min - $1.99 Delivery",
        image: require("../../assets/dummyData/milkFlower.png")
    }
];

// Test Suite: FoodSelection renders correctly
describe('FoodSelection renders correctly', () => {
    it('renders correctly', () => {
        const navigation = { 
            navigate: jest.fn(),
        };
        const route = {
            params: {
                foodItem: "Mock Food Item"
            }
        };
        const { getByText } = render(<FoodSelection route={route} />);
        const screenTitle = getByText('Menu List');
        expect(screenTitle).toBeTruthy();
 
        // expect(getByTestId('food-selection-screen')).toBeTruthy();
    });
});

// const { getByTestId } = render(<FoodSelection navigation={navigation, { foodItem: DATA[0]}} />);
// const { getByText } = render(<FoodSelection />);
// const foodSelectionText = getByText('Menu List');
// expect(foodSelectionText).toBeTruthy();