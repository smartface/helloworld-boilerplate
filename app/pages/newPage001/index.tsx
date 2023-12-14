import React from "react";
import { useContext, useEffect } from "react";
import { StatusBar, View, ActivityIndicator } from "react-native";
import { NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "@app/context";
import { mergeStyle } from "@smartface-generated/utils";
export type IPageProps = {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<any>;
};
export const HeaderView = (props: any) => {
    const { styles } = useContext(ThemeContext);
    const insets = useSafeAreaInsets();
    const headerViewStyle = mergeStyle([styles[".view"]]);
    const viewStyle = {
        ...headerViewStyle,
        flex: undefined,
        paddingTop: insets.top,
        height: headerViewStyle.height + insets.top
    };
    return <View style={viewStyle} />;
};
export const headerBar = {
    title: "newPage001",
    classList: [".headerBar"],
    View: HeaderView,
    hasCustomView: false
};
export default (props: IPageProps) => {
    const { styles } = useContext(ThemeContext);
    useEffect(() => {
        props.navigation.setOptions({ header: headerBar.hasCustomView ? (props: NativeStackHeaderProps) => (<HeaderView {...props} />) : undefined });
    }, [props.navigation]);
    const mergedPageStyle = mergeStyle([styles[".page"]]);
    const pageViewStyle = mergedPageStyle;
    return (<View style={pageViewStyle}>
        <StatusBar />


        <ActivityIndicator key="activityIndicator1" style={[styles[".activityIndicator"]]} />

    </View>);
};
