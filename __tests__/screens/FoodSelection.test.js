import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react-native';

import FoodSelection from '../../screens/Food/FoodSelection';
import { HorizontalFoodCard } from '../../components';
import { FlatList } from 'react-native-gesture-handler';

afterEach(cleanup);

const DATA=
[
    {
        id: 1,
        name: "Queen Pizza",
        description: "Tomato, mozzarella, basil, parmigiano-reggiano.",
        price: "15.99",
        calories: 78,
        isFavourite: true,
        image: require("../../assets/dummyData/queenpizza.png")
    },
    salad = {
        id: 2,
        name: "Swiss Chard Caesar",
        description: "Pangrattato and paresan with lemon anchovy dressing",
        categories: [1, 2],
        price: "15.99",
        calories: 78,
        isFavourite: true,
        image: require("../../assets/dummyData/salad.png")
    },
    drink = {
        id: 3,
        name: "Coke",
        description: "12 oz Coca-Cola",
        categories: [1, 2],
        price: "15.99",
        calories: 78,
        isFavourite: true,
        image: require("../../assets/dummyData/drink.png")
    }
    
];

// Test Suite: FoodSelection screen renders correctly
describe('FoodSelection screen renders correctly', () => {
    it('renders titles correctly', () => {
        const navigation = { 
            navigate: jest.fn(),
        };
        const route = {
            params: {
                foodItem: "Mock Food Item"
            }
        };
        const { getByText } = render(<FoodSelection navigation={navigation} route={route} />);
        const screenTitle = getByText('Menu List');
        const menuOptionTitles = getByText('Main Dish');
        const menuOptionTitles2 = getByText('Starters');
        const menuOptionTitles3 = getByText('Drinks');

        expect(screenTitle).toBeTruthy();
        expect(menuOptionTitles).toBeTruthy();
        expect(menuOptionTitles2).toBeTruthy();
        expect(menuOptionTitles3).toBeTruthy();

    });
    // Flast List Renders Restaurant Details, Restaurant Options and Restaurant's Menu List
    it('renders main flatlist on screen', () => {
        const navigation = { 
            navigate: jest.fn(),
        };
        const route = {
            params: {
                foodItem: "Mock Food Item"
            }
        };
        const { getByTestId, getByText } = render(
            <FoodSelection navigation={navigation} route={route} />,
            <FlatList 
                data={DATA}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <HorizontalFoodCard item={item} />}
            />,
        );
        const foodCard = getByTestId('food-list');
        expect(foodCard).toBeTruthy();
    });
    it('renders horizontal card flatlist on screen', ()=> {
        const navigation = { 
            navigate: jest.fn(),
        };
        const route = {
            params: {
                foodItem: "Mock Food Item"
            }
        };
        const { getByTestId, getByText } = render(
            <FoodSelection navigation={navigation} route={route} />,
            <FlatList 
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <HorizontalFoodCard item={item} />}
            />,
        );

        const horizontalFoodCardArr = [];
        let regEx = new RegExp('(100)|(0*\d{1,2})');   

        // if(getByTestId(`horizontal-food-card-${regEx}`)) {
        //     horizontalFoodCardArr.push(getByTestId(`horizontal-food-card-${regEx}`));
        // }

        horizontalFoodCardArr.push(getByTestId("horizontal-food-card-1"));
        horizontalFoodCardArr.push(getByTestId("horizontal-food-card-2"));
        horizontalFoodCardArr.push(getByTestId("horizontal-food-card-3"));

    
        expect(horizontalFoodCardArr).toBeTruthy();

        expect(horizontalFoodCardArr.length).toBe(3);
        // expect(navigation.navigate).toHaveBeenCalledWith(
        //     "FoodSelection", 
        // );
    });
});


// Issue with Custom Icon Button and React Native Testing Library
// Test Suite: Navigation to Home Screen on a press of a back button
describe('Navigation to Home Screen on a press of a back button', () => {
    it('Navigates Back Home', () => {
        const navigation = { 
            goBack: jest.fn(),
        };
        const route = {
            params: {
                foodItem: "Mock Food Item"
            }
        };
        const { getByTestId } = render(
            <FoodSelection navigation={navigation} route={route} />
        );
        const backButton = getByTestId('back-button');
        fireEvent.press(backButton);

        expect(navigation.goBack).toHaveBeenCalled();
    });
});
