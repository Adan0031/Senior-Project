import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';


import  Account  from "../../screens/Account/Account.js";

// Test that the Account Screen renders correctly
describe('Account Screen', () => {
    it('renders correctly', () => {
        const navigate = jest.fn();
        const { getByText } = render(<Account navigation={{ navigate }}/>);
        const titleElement1 = getByText('Hi Username');
        const titleElement2 = getByText('Name');
        const titleElement3 = getByText('Email');
        const titleElement4 = getByText('Password');
        const titleElement5 = getByText('Payment');




        
        expect(titleElement1).toBeTruthy();
        expect(titleElement2).toBeTruthy();
        expect(titleElement3).toBeTruthy();
        expect(titleElement4).toBeTruthy();
        expect(titleElement5).toBeTruthy();
    });
});