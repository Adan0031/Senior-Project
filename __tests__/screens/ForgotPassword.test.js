import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import  ForgotPassword  from "../../screens/Authentication/ForgotPassword";


// Mock Third Party Modules
jest.mock('react-native-keyboard-aware-scroll-view', () => {
    const KeyboardAwareScrollView = ({ children }) => children;
    return { KeyboardAwareScrollView };
});

// Stack Navigator Screen ForgotPassword Renders Properly
describe("ForgotPassword Screen", () => {
    it("Renders correctly", () => {
        const navigation = { navigate: jest.fn() };
        const { getByText } = render(<ForgotPassword navigation={{}} />);
        const titleText = getByText("Password Recovery");
        const emailText = getByText("Email");
        expect(titleText).toBeTruthy();
        expect(emailText).toBeTruthy();
  });
});

// ForgotPassword Screen Navigates to Sign In Screen
describe("ForgotPassword Screen", () => {
    it("Navigates to Sign In Screen", () => {
        const replace = jest.fn();
        const { getByText } = render(<ForgotPassword navigation={{ replace }} />);
        const signInButton = getByText("Sign In?");
        fireEvent.press(signInButton);
        expect(replace).toHaveBeenCalledWith("SignIn");
  });
});