import React from "react";
import Button from "@app/components/Button";
import { useContext, useEffect } from "react";
import { StatusBar, View, TextInput } from "react-native";
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
    return <View style={viewStyle}/>;
};
export const headerBar = {
    title: "newPage002",
    classList: [".headerBar"],
    View: HeaderView,
    hasCustomView: false
};
export default (props: IPageProps) => {
    const { styles } = useContext(ThemeContext);
    useEffect(() => {
        props.navigation.setOptions({ header: headerBar.hasCustomView ? (props: NativeStackHeaderProps) => (<HeaderView {...props}/>) : undefined });
    }, [props.navigation]);
    const mergedPageStyle = mergeStyle([styles[".page"]]);
    const pageViewStyle = mergedPageStyle;
    return (<View style={pageViewStyle}>
        <StatusBar />
        <View key="view1" style={[styles[".view"], styles["#newPage002-view1"]]}><View key="view2" style={[styles[".view"], styles["#newPage002-view2"]]}>
            <TextInput key="textInput1" style={[styles[".textInput"], styles["#newPage002-textInput1"]]}/>
            <TextInput key="textInput2" style={[styles[".textInput"], styles["#newPage002-textInput1"]]}/>
        </View><View key="view3" style={[styles[".view"], styles["#newPage002-view3"]]}/></View><Button key="button" style={[styles[".pressable"], styles[".button"]]}/></View>);
};
