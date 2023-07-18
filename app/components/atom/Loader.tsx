import React from "react";
import {
    View
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
            <View className={'absolute top-0 bottom-0 left-0 right-0 z-1000'}>
                <SkypeIndicator size={size} color={Colours.purple}/>
            </View>
        );
    return null
};

export default Loader

