import React, {useMemo} from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from "react-native"

// Third Party
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'

// Component
import GroupOfChip from "../../components/molecules/GroupOfChip";
import TextLabel from "../../components/atom/TextLabel";

// Types
import {Film} from "../../types/film";
import {px, scaleFontSize} from "../../utils/ScreenUtil";
import Font from "../../assets/fonts/Fonts";

type Props = {
    data: Film,
    index: number,
    expanded: boolean,
    onClick: (index: number) => void,
    onDetailClick: (data: Film) => void
}

const MovieListItem = ({data, index, expanded, onClick, onDetailClick} : Props): JSX.Element => {

    const chipData: string[] = useMemo(() => {
        return (data?.speciesConnection?.species ?? []).map(item => item.name)
    }, [data.speciesConnection?.species ?? []]);


    const onItemClick = () : void => {
        onClick && onClick(index);
    };

    const btnDetailClick = () : void => {
        onDetailClick && onDetailClick(data)
    };

    const renderExpandedContent = (): JSX.Element => {
        return (
            <>
                <GroupOfChip chips={chipData}/>
                <Pressable style={style.detailButtonContainer} onPress={btnDetailClick}>
                    <Text style={style.btnDetailTitle}>
                        {"Detail"}
                    </Text>
                    <FontAwesomeIcon icon={ faChevronRight } color={"blue"} />
                </Pressable>
            </>
        )
    };

    const renderHeader = (): JSX.Element => {
        return (
            // @ts-ignore
            <View style={style.headerContainer(expanded)}>
                <TextLabel bold mr={10} style={{flex: 1}} fontSize={16} color={'gray'}>
                    {data.title}
                </TextLabel>
                <FontAwesomeIcon icon={ expanded ? faChevronUp : faChevronDown } />
            </View>
        )
    };

    return (
        <Pressable onPress={onItemClick}>
            <View style={style.container}>
                {renderHeader()}
                {
                    expanded ? renderExpandedContent() : null
                }
            </View>
        </Pressable>
    )
};

const style = StyleSheet.create({
    container: {
        paddingVertical: px(20),
        paddingHorizontal: px(16),
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    // @ts-ignore
    headerContainer: (expanded: boolean) => ({
        flexDirection: 'row',
        marginBottom: px( expanded ? px(8) : 0)
    }),
    detailButtonContainer: {
        alignSelf: "flex-end",
        flexDirection: "row",
        justifyContent:"center",
        alignItems: 'center'
    },
    btnDetailTitle: {
        fontSize: scaleFontSize(18),
        marginRight: px(8),
        color: "blue"
    }
});
export default MovieListItem;
