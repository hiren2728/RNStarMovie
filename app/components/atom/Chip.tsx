import React from "react";

import {
    View,
    Text,
    StyleSheet
} from "react-native"

// Utils
import {px, scaleFontSize} from "../../utils/ScreenUtil";
import TextLabel from "./TextLabel";

type Props = {
    title: string
}

const Chip = ({title} : Props) => {
    return (
        <View style={style.container}>
            <TextLabel>
                {title}
            </TextLabel>
        </View>
    )
};


const style = StyleSheet.create({
    container: {
        height: px(30),
        paddingHorizontal: px(10),
        justifyContent: 'center',
        borderRadius: px(15),
        borderWidth: 1,
        borderColor: "gray",
        margin: px(4)
    }
});

export default Chip;
