import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react-native';
import Home from '../../screens/Home/Home';


afterEach(cleanup);

// Home Screen Renders Correctly
describe('Home Screen', () => {
    it('renders correctly', () => {
        const { getByText } = render(<Home />);
        // const textTitle = getByText('Home');
        // expect(textTitle).toBeTruthy();
    });
});