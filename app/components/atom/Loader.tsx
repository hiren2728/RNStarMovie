import React from "react";
import {
    View,
    StyleSheet
} from "react-native";

// Third Party
import { SkypeIndicator } from "react-native-indicators"

// Hook
import useColor from "../../hooks/useColorStyle";

type Props = {
    visible: boolean,
    size?: number
}

const Loader = ({visible, size = 40}: Props) => {
    const { Colours } = useColor();
    if(visible)
        return (
            <View style={style.container}>
                <SkypeIndicator size={size} color={Colours.purple}/>
            </View>
        );
    return null
};

export default Loader

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    }
});
