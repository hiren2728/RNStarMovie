import {StyleSheet} from "react-native";
import Font from "../assets/fonts/Fonts";
import {scaleFontSize} from "./ScreenUtil";
import {ColourType} from "../theme/Colour";

const getCommonStyle = (color: ColourType) => {
    return StyleSheet.create({
        headerTitle: {
            fontFamily: Font.BOLD,
            fontSize: scaleFontSize(16)
        },
        safeArea: {
            flex: 1,
            backgroundColor: color.white
        },
        container: {
            flex: 1,
            backgroundColor: color.white
        }
    })
};

export default getCommonStyle;
