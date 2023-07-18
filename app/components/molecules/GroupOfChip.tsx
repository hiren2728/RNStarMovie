import React from "react"
import {
    View
} from "react-native"

// Component
import Chip from "../atom/Chip";

type Props = {
    chips: string[]
}

const GroupOfChip = ({chips} : Props) => {
    return (
        <View className={`flex-row flex-wrap items-baseline`}>
            {
                chips.map((item, index) => <Chip title={item} key={`chip_${index}`}/>)
            }
        </View>
    )
};

export default React.memo(GroupOfChip)
