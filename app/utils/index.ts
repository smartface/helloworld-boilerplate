import { ImageStyle, PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";

const getStyle = (theme: any, themeClassList: string[], userClassList: string[] | undefined, propStyle?: StyleProp<ViewStyle> | StyleProp<TextStyle> | StyleProp<ImageStyle> | PressableProps["style"]) => {
    let _classList = themeClassList || [];

    // Add if user assigned any class from theme
    if (Array.isArray(userClassList)) {
        _classList = _classList.concat(userClassList)
    }

    const res: any[] = [];
    _classList.forEach(c => {
        if (theme[c]) {
            res.push(theme[c])
        }
    });
    if (propStyle) {
        res.push(propStyle);
    }
    return res;
}

export { getStyle }