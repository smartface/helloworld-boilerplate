import React from "react";
import { useEffect, useContext } from "react";
import { NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StatusBar, Image, View, Text, Pressable } from "react-native";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "@app/store";
import { useGetPetByIdQuery } from "@app/store/deals";
import { getStyle } from "@app/utils";
import { ThemeContext } from "@app/context";
import { mergeStyle } from "@smartface-generated/utils";
import i18n from "@app/translation";
// HeaderBar View
const HeaderView = (props: NativeStackHeaderProps) => {
    return <View />;
};
export const headerBar = {
    title: "Page1",
    classList: [".headerBar"],
    View: HeaderView,
    hasCustomView: false
};
export type PageProps = {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<any>;
};
// Page Screen
export default (props: PageProps) => {
    const { styles } = useContext(ThemeContext);
    useEffect(() => {
        props.navigation.setOptions({ header: headerBar.hasCustomView ? (props: NativeStackHeaderProps) => (<HeaderView {...props} />) : undefined });
    }, [props.navigation]);
    const mergedPageStyle = mergeStyle([styles[".page"]]);
    const pageViewStyle = mergedPageStyle;
    const { t } = useTranslation();
    const { data, isLoading, isSuccess, isError, } = useGetPetByIdQuery({ petId: 10 });
    const user = useSelector((state: RootState) => state.user);
    console.log("user:", user.token);
    return (<View style={pageViewStyle}>
        <StatusBar animated={false} backgroundColor={"rgba( 0, 161, 241, 1 )"} barStyle={"light-content"} hidden={false} showHideTransition={"fade"} />

        <Image key="image1" source={require("@app/assets/images/smartface.png")} style={getStyle(styles, [".image", "#page1-image1", "#page1-image-1"], [])} /><View key="view1" style={getStyle(styles, [".view", "#page1-view1"], [])}>
            <Text key="text4" style={getStyle(styles, [".text", "#page1-text2"], [])}>
                {"Page1"}
            </Text>


        </View><Pressable key="btnLanguage" onPress={() => {
            i18n.changeLanguage(i18n.language === "en" ? "tr" : "en");
        }} style={getStyle(styles, [".pressable", "#page1-pressable1"], [])}>
            <Text key="text1_1" style={getStyle(styles, [".text", "#page1-text1"], [])}>
                {"Welcome"}
            </Text>
        </Pressable><Pressable key="pressable1" onPress={() => {
            props.navigation.navigate("page2");
        }} style={getStyle(styles, [".pressable", "#page1-pressable1"], [])}>
            <Text key="text1" style={getStyle(styles, [".text", "#page1-text1"], [])}>
                {"Next Page"}
            </Text>
        </Pressable></View>);
};
