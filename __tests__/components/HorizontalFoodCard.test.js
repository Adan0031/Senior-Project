import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react-native';

import  HorizontalFoodCard  from '../..//components/HorizontalFoodCard';
import { PROPERTY_TYPES } from '@babel/types';

// Properly Render Component
describe('HorizontalFoodCard', () => {
    const props = {
        item: {
            image: require("../../assets/dummyData/queenpizza.png")
        },
    };
    it ('renders without crashing', () => {
        const { getByTestId } = render(<HorizontalFoodCard item={ props.item.image }/>);
    });
});