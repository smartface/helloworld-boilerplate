/**
 * @format
 */

import 'react-native';
import React from "react";
import { render, screen, fireEvent } from '@testing-library/react-native';



import Page1 from '@app/pages/Page1';
it("Localization works as expected", () => {
  render(<Page1 />);
  const welcomeText = screen.getByText("Welcome")
  const languageButton = screen.getByText("Welcome")

  expect(welcomeText).toBeOnTheScreen();
  expect(languageButton).toBeOnTheScreen();

  fireEvent.press(languageButton);

  expect(welcomeText.props.children).toContain("Hoşgeldiniz")
})


import Router from '../app/routers'
it('should app navigate if the user is logged in', () => {
  render(<Router />);
  const pageTitle = screen.getByText("Page1")

  expect(pageTitle).toBeOnTheScreen();
});

