import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import App from '../../App.js';
import  { OnBoarding } from '../../screens';

describe('OnBoarding Navigation', () => {
  it('navigates on button press', () => {
    const replace = jest.fn();
    const { getByText } = render(<OnBoarding navigation={{ replace }} />);
    fireEvent.press(getByText('Skip'));
    expect(replace).toHaveBeenCalledWith('SignIn');
  });
});