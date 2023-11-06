import React, { useContext, useEffect } from "react";
import { NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StatusBar, View, Text, Pressable, ImageStyle } from "react-native";
import { ThemeContext } from "@app/context";
import { mergeStyle, getStyle } from "@smartface-generated/utils";
// HeaderBar View
const HeaderView = (props: NativeStackHeaderProps) => {
    return <View />;
};
export const headerBar = {
    title: "Page2",
    classList: [".headerBar"],
    View: HeaderView,
    hasCustomView: false
};
export type IPageProps = {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<any>;
};
// Page Screen
export default (props: IPageProps) => {
    const { styles, variables } = useContext(ThemeContext);
    console.log("Variables:mainColor ", variables.mainColor);
    useEffect(() => {
        props.navigation.setOptions({ header: headerBar.hasCustomView ? (props: NativeStackHeaderProps) => <HeaderView {...props}/> : undefined });
    }, [props.navigation]);
    const mergedPageStyle = mergeStyle([styles[".page"]]);
    const pageViewStyle = mergedPageStyle;
    return <View style={pageViewStyle}>
        <StatusBar animated={false} backgroundColor={"rgba( 74, 144, 226, 1 )"} barStyle={"dark-content"} hidden={false} showHideTransition={"fade"}/>


        
        <View key="view1" style={getStyle(styles, [".view", "#page1-view1"], [])}>
            <Text style={getStyle(styles, [".text", "#page1-text2"], [])}>
                {"Page2"}
            </Text>
        </View><Pressable key="pressable1" onPress={() => props.navigation.navigate("modalRouter")} style={getStyle(styles, [".pressable", "#page1-pressable1"], [])}>
            <Text key="text1" style={getStyle(styles, [".text", "#page1-text1"], [])}>
                {"Modal Page"}
            </Text>
        </Pressable></View>;
};
