import React, { useCallback, useEffect, useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Image, ImageStyle, Pressable, StatusBar, Text, View } from "react-native";
import { mergeStyle, getStyle, useStyleWithSafeAreaPadding } from "@smartface-generated/utils";
import { ThemeContext } from "@app/context";
import Xmark from "@app/assets/icons/Xmark";
// HeaderBar View
const HeaderView = (props: NativeStackHeaderProps & {
    onClosePressed: () => void;
}) => {
    const { styles } = useContext(ThemeContext);
    const insets = useSafeAreaInsets();
    const headerViewStyle = mergeStyle(getStyle(styles, [".view", "#page3-headerView"], []));
    const viewStyle = {
        ...headerViewStyle,
        flex: undefined,
        paddingTop: insets.top,
        height: headerViewStyle.height + insets.top
    };
    return <View key={"headerView"} style={viewStyle} /* style={[styles['.view'], styles['#page3-headerView']]} */>
        <Pressable key={"pressable2"} onPress={props.onClosePressed} style={getStyle(styles, [".pressable", "#page3-pressable2"], [])}>
            <Xmark key="icon1" height={24} width={24} style={getStyle(styles, [".icon", "#page3-icon1"], [])} />
        </Pressable>
        <Image key="image1" source={require("@app/assets/images/smartface.png")} style={[styles[".image"], styles["#page3-image1"]] as ImageStyle} />
    </View>;
};
export const headerBar = {
    title: "Page3",
    classList: [".headerBar"],
    View: HeaderView,
    hasCustomView: true
};
export type IPageProps = {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<any>;
};
// Page Screen
export default (props: IPageProps) => {
    const { styles } = useContext(ThemeContext);
    const onClosePressed = useCallback(() => {
        props.navigation.canGoBack() && props.navigation.goBack();
    }, [props.navigation]);
    useEffect(() => {
        props.navigation.setOptions({
            header: headerBar.hasCustomView ? (props: NativeStackHeaderProps) => (<HeaderView {...props} onClosePressed={onClosePressed} />) : undefined
        });
    }, [props.navigation, onClosePressed]);
    const mergedPageStyle = mergeStyle([styles[".page"]]);
    const pageViewStyle = useStyleWithSafeAreaPadding(mergedPageStyle);
    return <View style={pageViewStyle}>
        <StatusBar animated={false} backgroundColor={"rgba( 74, 144, 226, 1 )"} barStyle={"dark-content"} hidden={false} showHideTransition={"fade"} />
        <View key="view1" style={getStyle(styles, [".view", "#page1-view1"], [])}>
            <Text key="text2" style={getStyle(styles, [".text", "#page1-text2"], [])}>
                {"Modal Page"}
            </Text>
        </View><Pressable key="pressable1" style={getStyle(styles, [".pressable", "#page1-pressable1"], [])}>
            <Text key="text1" style={getStyle(styles, [".text", "#page1-text1"], [])}>
                {"Close Page"}
            </Text>
        </Pressable></View>;
};
