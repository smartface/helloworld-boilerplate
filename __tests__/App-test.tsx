/**
 * @format
 */

import 'react-native';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });


import React, { useState } from "react";
import { View, TextInput, Pressable, StyleSheet, Text, Button } from "react-native";

// Use functional or class component based on your preference.
// Make it a default export.

export default function LoginForm(props) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const isSubmitPressable = () => {

    if (username.length > 0 && password.length > 0) {
      console.log("DISABLED: FALSE")
      return false
    }

    console.log("DISABLED: TRUE")
    return true
  }

  return (
    <View style={{ marginHorizontal: 50 }}>
      <TextInput
        testID='username-input'
        nativeID="username-input"
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setusername}
      />
      <TextInput
        testID='password-input'
        nativeID="password-input"
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setpassword}
        secureTextEntry={true}
      />

      {/*<Button
                title='Submit'
                nativeID="login-button"
                testID='login-button'
                disabled={isSubmitPressable()}
                onPress={() => onSubmit(username+ password)}
      /> */}
      <Pressable
        testID='login-button'
        nativeID="login-button"
        disabled={isSubmitPressable()}
        // onPress={() => onSubmit(username + password)}
        onPress={() => {
          console.log("SUBMIT")
          props.onSubmit({ username: username, password: password })
        }}
      >
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: 400,
    height: 50,
    borderWidth: 1,
    borderColor: '#000'
  }
})

const A = ({ onSubmit }) => {
  return (
    <View>
      <Text testID='deneme-text'>deneme</Text>

      <TextInput testID='input1' secureTextEntry={true} />

      <Pressable onPress={() => onSubmit('a')} testID='btn' disabled={true}>
        <Text>Click</Text>
      </Pressable>
    </View>
  )
}

import { render, screen, fireEvent } from '@testing-library/react-native';


it("deneme", () => {
  const onPressMock = jest.fn();
  render(<LoginForm onSubmit={onPressMock} />);


  const input1 = screen.getByTestId("username-input")
  const input2 = screen.getByTestId("password-input")
  const btn = screen.getByTestId("login-button")
  btn.props.onPress = onPressMock





  expect(input1).toBeTruthy();
  expect(input2).toBeTruthy();
  expect(btn).toBeTruthy();

  expect(input2.props.secureTextEntry).toBeTruthy()
  console.log('btn.props.disabled:',btn.props)
  expect(btn.props.accessibilityState.disabled).toBeTruthy()
  
  
  fireEvent.changeText(input1, 'username')
  fireEvent.changeText(input2, 'password')
  expect(btn.props.accessibilityState.disabled).toBeFalsy()
  

  // fireEvent.press(btn)
  // expect(onPressMock).toHaveBeenCalledWith("a");


})
