import React from "react"
import {
    View,
    StyleSheet
} from "react-native"
import Chip from "../atom/Chip";

type Props = {
    chips: string[]
}

const GroupOfChip = ({chips} : Props) => {
    return (
        <View style={style.container}>
            {
                chips.map((item, index) => <Chip title={item} key={`chip_${index}`}/>)
            }
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        alignItems: 'baseline',
        flexDirection: "row",
        flexWrap: 'wrap'
    }
});

export default React.memo(GroupOfChip)
