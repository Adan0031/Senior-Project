import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ScrollView } from 'react-native';


import { SignIn } from '../../screens';

// Mock Third Party Modules
jest.mock('react-native-keyboard-aware-scroll-view', () => {
    const KeyboardAwareScrollView = ({ children }) => children;
    return { KeyboardAwareScrollView };
});







// Stack Navigator SignIn Screen Renders Correctly 
describe('SignIn Screen', () => {
    it('Renders the correct header title', () => {
        const { getByText } = render(
            <SignIn />
        );
        const headerTitle = getByText('Let\'s Sign You In');
        expect(headerTitle).toBeTruthy();
    });

    it('Renders the correct header subtitle', () => {
        const { getByText } = render(<SignIn />);
        const subTitle = getByText('Welcome back Vaquero, you\'ve been missed!');
        expect(subTitle).toBeTruthy();
    });

    // it('Renders the correct header left button', () => {
    //     const { getByTestId } = render(<SignIn />);
    //     expect(getByTestId('sign-in-screen-header-left-button')).toHaveTextContent('Cancel');
    // });

    // it('Renders the correct header right button', () => {
    //     const { getByTestId } = render(<SignIn />);
    //     expect(getByTestId('sign-in-screen-header-right-button')).toHaveTextContent('Next');
    // });

    it('Renders the correct email input', () => {
        const { getByTestId } = render(<SignIn />);
        expect(getByTestId('email-Input')).toBeTruthy();
    });

    // it('Renders the correct email input label', () => {
    //     const { getByTestId } = render(<SignIn />);
    //     expect(getByTestId('sign-in-screen-email-input-label')).toHaveTextContent('Email');
    // });

    // it('Renders the correct email input placeholder', () => {
    //     const { getByTestId } = render(<SignIn />);
    //     expect(getByTestId('sign-in-screen-email-input-placeholder')).toHaveTextContent('Email');
    // });
});




