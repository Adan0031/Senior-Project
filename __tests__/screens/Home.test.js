import '../../addEventListener.mock';
import '../../attachEvent.mock';

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react-native';
import Home from '../../screens/Home/Home';
import { FlatList } from 'react-native';
import { VerticalFoodCard } from '../../components';


afterEach(cleanup);

// window.addEventListener = jest.fn();
// window.attachEvent= jest.fn();

// Home Screen Renders Correctly
describe('Home Screen', () => {
    it('renders correctly', () => {
        const { getByPlaceholderText } = render(<Home />);
        const textTitle = getByPlaceholderText('search food...');
        expect(textTitle).toBeTruthy();

    });
});

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

// FlatList Renders Correctly
describe('FlatList', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(
            <Home />,
            <FlatList
                data={DATA}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <VerticalFoodCard item={item} />}
            />
        );
        expect(getByTestId('restaurant-list')).toBeTruthy();
    });
});

// FlatList Navigates to Food Selection Screen
describe('FlatList', () => {
    it('navigates to Food Selection Screen', () => {
        const navigation = { navigate: jest.fn() };
        const { getByTestId, getByText } = render(
            <Home navigation = { navigation }/>,
            <FlatList
                data={DATA}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <VerticalFoodCard item={item} />}
            />
        );
        const testID1 = getByTestId('restaurant-list');
        expect(testID1).toBeTruthy();

        const cardTitle = getByText('Coffee');
        fireEvent.press(cardTitle);

        const nextScreen = getByText('Main Dish');

        // expect(navigation.navigate).toHaveBeenCalledWith('FoodSelection', {
        //     foodItem: DATA[0]
        // });
        expect(navigation.navigate).toHaveBeenCalledWith('FoodSelection', {

        });

      
    });
});