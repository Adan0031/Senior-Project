import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import  { OnBoarding } from '../../screens';


// Stack Navigator OnBoarding Screen Renders correctly
describe('OnBoarding Screen', () => { 
  it('Renders screen correctly', () => {
    const { getByText } = render(<OnBoarding />);
    const title = getByText('Welcome Vaquero');
    const subtitle = getByText('What would you like to eat today?');
    const login = getByText('Log In');
    expect(title).toBeTruthy();
    expect(subtitle).toBeTruthy();
    expect(login).toBeTruthy();
  })
});

describe('OnBoarding Navigation', () => {
  it('Navigates on button press', () => {
    const replace = jest.fn();
    const { getByText } = render(<OnBoarding navigation={{ replace }} />);
    fireEvent.press(getByText('Log In'));
    expect(replace).toHaveBeenCalledWith('SignIn');
  });
});