import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react-native';
import Home from '../../screens/Home/Home';


afterEach(cleanup);

// Home Screen Renders Correctly
describe('Home Screen', () => {
    it('renders correctly', () => {
        const { getByPlaceholderText } = render(<Home />);
        const textTitle = getByPlaceholderText('search food...');
        expect(textTitle).toBeTruthy();

        
    });
});


// Navigate to a Food Selection Screen from Home Screen