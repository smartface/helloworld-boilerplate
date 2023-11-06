import React from "react";
import { useContext } from "react";
import { Pressable, Text } from "react-native";
import { ThemeContext } from "@app/context";
type IComponentProps = {
    style?: any;
};
export default (props: any) => {
    const { styles } = useContext(ThemeContext);
    return (<Pressable style={[styles[".pressable"], styles[".button"], props.style]}><Text key="text8" style={[styles[".text"], styles[".button-text1"]]}>{"Welcome Button"}</Text></Pressable>);
};
