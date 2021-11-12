import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';


import  Account  from "../../screens/Account/Account.js";

// Test that the Account Screen renders correctly
describe('Account Screen', () => {
    it('renders correctly', () => {
        const navigate = jest.fn();
        const { getByText } = render(<Account navigation={{ }}/>);
        const titleElement1 = getByText('Hi Username');
        const titleElement2 = getByText('Name');
        const titleElement3 = getByText('Email');
        const titleElement4 = getByText('Password');
        const titleElement5 = getByText('Payment');
        const titleElement6 = getByText('Log Out');

        expect(titleElement1).toBeTruthy();
        expect(titleElement2).toBeTruthy();
        expect(titleElement3).toBeTruthy();
        expect(titleElement4).toBeTruthy();
        expect(titleElement5).toBeTruthy();
        expect(titleElement6).toBeTruthy();
    });
});

// On Pressing Button Links, Navigate to the correct screen
describe('Account Screen', () => {
        it('redirects to the correct screen', () => {
        const navigate = jest.fn();
        const { getByText } = render(<Account navigation={{ navigate }}/>);
        const titleElement2 = getByText('Name');
        const titleElement3 = getByText('Email');
        const titleElement4 = getByText('Password');
        const titleElement5 = getByText('Payment');
        const titleElement6 = getByText('Log Out');

        fireEvent.press(titleElement2);
        fireEvent.press(titleElement3);
        fireEvent.press(titleElement4);
        fireEvent.press(titleElement5);
        fireEvent.press(titleElement6);

        expect(navigate).toHaveBeenCalledTimes(5);
        expect(navigate).toHaveBeenCalledWith('Account_name');
        expect(navigate).toHaveBeenCalledWith('Account_email');
        expect(navigate).toHaveBeenCalledWith('Account_password');
        expect(navigate).toHaveBeenCalledWith('Account_payment');
        expect(navigate).toHaveBeenCalledWith('SignIn');
    });
});