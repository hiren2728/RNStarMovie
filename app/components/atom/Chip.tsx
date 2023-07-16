import React from "react";

import {
    View,
    Text,
    StyleSheet
} from "react-native"

// Utils
import {px, scaleFontSize} from "../../utils/ScreenUtil";

type Props = {
    title: string
}

const Chip = ({title} : Props) => {
    return (
        <View style={style.container}>
            <Text style={style.text}>
                {title}
            </Text>
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
    },
    text: {
        fontSize: scaleFontSize(10)
    }
});

export default Chip;
