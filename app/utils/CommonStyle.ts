import {StyleSheet} from "react-native";
import Font from "../assets/fonts/Fonts";
import {scaleFontSize} from "./ScreenUtil";

const commonStyle = StyleSheet.create({
    headerTitle: {
        fontFamily: Font.BOLD,
        fontSize: scaleFontSize(16)
    },
    safeArea: {
        flex: 1,
        backgroundColor: "white"
    }
});

export default commonStyle;
