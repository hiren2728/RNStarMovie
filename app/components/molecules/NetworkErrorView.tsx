import React from "react"
import {
    View,
} from "react-native";

// Component
import TextLabel from "../atom/TextLabel";

type Props = {
    error: string
}

const NetworkErrorView = ({error}: Props) => {

    return (
        <View className={`flex-1 justify-center item-center`}>
            <TextLabel numberOfLine={0} className={"text-sm text-center text-red"}>
                {error}
            </TextLabel>
        </View>
    )
};

export default NetworkErrorView;
