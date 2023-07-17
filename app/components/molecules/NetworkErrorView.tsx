import React from "react"
import {
    StyleSheet,
    View,
} from "react-native";

// Component
import TextLabel from "../atom/TextLabel";
import useColor from "../../hooks/useColorStyle";

type Props = {
    error: string
}

const NetworkErrorView = ({error}: Props) => {
    const { Colours } = useColor();

    return (
        <View style={style.container}>
            <TextLabel fontSize={14} align={"center"} numberOfLine={0} color={Colours.red}>
                {error}
            </TextLabel>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default NetworkErrorView;
