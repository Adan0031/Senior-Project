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

    it('Renders the correct email input label', () => {
        const { getByText } = render(<SignIn />);
        const emailInput = getByText('Email');
        expect(emailInput).toBeTruthy();
    });

    it('Renders the correct password input label', () => {
        const { getByText } = render(<SignIn />);
        const passwordInput = getByText('Password');
        expect(passwordInput).toBeTruthy();
    });

});

// Stack Navigator SignIn Screen Navigates to SignUp Screen
describe('SignIn Screen Navigates', () => {
        it('Navigates to SignUp Screen when SignUp Button Link is clicked', () => {
        const navigation = { navigate: jest.fn() };
        const { getByText } = render(
            <SignIn navigation={navigation} />
        );
        fireEvent.press(getByText('Sign Up'));
        expect(navigation.navigate).toHaveBeenCalledWith('SignUp');
    });
});

// Stack Navigator SignIn Screen Navigates to Home Screen Once We Continue with Outlook Login
describe('SignIn Screen Navigates', () => {
        it('Navigates to Home Screen when Continue with Outlook Button Link is clicked', () => {
        const navigation = { replace: jest.fn() };
        const { getByText } = render(
            <SignIn navigation={ navigation } />
        );
        fireEvent.press(getByText('Continue With Outlook'));
        expect(navigation.replace).toHaveBeenCalledWith('Home');
    });
});
