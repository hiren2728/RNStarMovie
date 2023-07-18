import React, {useMemo} from "react";
import {
    View,
    StyleSheet,
    Pressable,
} from "react-native"

// Third Party
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons/faChevronDown'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons/faChevronUp'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight'

// Component
import GroupOfChip from "../../components/molecules/GroupOfChip";
import TextLabel from "../../components/atom/TextLabel";

// Types
import {Film} from "../../types/film";
import {ColourType} from "../../theme/Colour";

// Utils
import useColor from "../../hooks/useColorStyle";
import String from "../../language/Strings";

type Props = {
    data: Film,
    index: number,
    expanded: boolean,
    onClick: (index: number) => void,
    onDetailClick: (data: Film) => void
}

const MovieListItem = ({data, index, expanded, onClick, onDetailClick}: Props): JSX.Element => {

    const {Colours} = useColor();
    const chipData: string[] = useMemo(() => {
        return (data?.speciesConnection?.species ?? []).map(item => item.name)
    }, [data.speciesConnection?.species ?? []]);


    const onItemClick = (): void => {
        onClick && onClick(index);
    };

    const btnDetailClick = (): void => {
        onDetailClick && onDetailClick(data)
    };

    const renderExpandedContent = (): JSX.Element => {
        return (
            <>
                <GroupOfChip chips={chipData}/>
                <Pressable className={"flex-row self-end items-center justify-center mt-1"} onPress={btnDetailClick}>
                    <TextLabel className={'text-lg mr-2 underline text-purple'}>
                        {String.detail}
                    </TextLabel>
                    <FontAwesomeIcon icon={faChevronRight} color={Colours.purple}/>
                </Pressable>
            </>
        )
    };

    const renderHeader = (): JSX.Element => {
        return (
            <View className={`flex-row ${expanded ? 'mb-1' : 'mb-0'}`}>
                <TextLabel className={`flex-1 mr-2.5 text-base mr-2.5`} bold>
                    {data.title}
                </TextLabel>
                <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} color={Colours.davysBlack}/>
            </View>
        )
    };

    return (
        <Pressable onPress={onItemClick}>
            <View style={style(Colours).container} className={"py-5 px-4 my-2.5 shadow"}>
                {renderHeader()}
                {
                    expanded ? renderExpandedContent() : null
                }
            </View>
        </Pressable>
    )
};

const style = (color: ColourType) => {
    return (
        StyleSheet.create({
            container: {
                backgroundColor: color.white
            }
        })
    )
};
export default MovieListItem;
