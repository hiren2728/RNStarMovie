import React from "react";

import {
    View
} from "react-native"

// Component
import TextLabel from "./TextLabel";

type Props = {
    title: string
}

const Chip = ({title} : Props) => {
    return (
        <View className={'h-7 px-2.5 justify-center m-1 border rounded-full border-purple'}>
            <TextLabel bold className={'text-xs text-purple'}>
                {title}
            </TextLabel>
        </View>
    )
};


export default Chip;
