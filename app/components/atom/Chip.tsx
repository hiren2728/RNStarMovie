import React from "react";

import {
    View,
    StyleSheet
} from "react-native"

// Component
import TextLabel from "./TextLabel";

// Utils
import {px} from "../../utils/ScreenUtil";
import useColor from "../../hooks/useColorStyle";

// Type
import {ColourType} from "../../theme/Colour";

type Props = {
    title: string
}

const Chip = ({title} : Props) => {
    const { Colours } = useColor();

    return (
        <View style={style(Colours).container}>
            <TextLabel color={Colours.purple} bold>
                {title}
            </TextLabel>
        </View>
    )
};


const style = (color: ColourType) => {
    return (
        StyleSheet.create({
            container: {
                height: px(30),
                paddingHorizontal: px(10),
                justifyContent: 'center',
                borderRadius: px(15),
                borderWidth: 1.5,
                borderColor: color.purple,
                margin: px(4)
            }
        })
    )
};

export default Chip;
