import React, {useMemo} from "react";
import {
    View,
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
import {ColourType} from "../../theme/Colour";

// Utils
import {px} from "../../utils/ScreenUtil";
import useColor from "../../hooks/useColorStyle";
import String from "../../language/Strings";

type Props = {
    data: Film,
    index: number,
    expanded: boolean,
    onClick: (index: number) => void,
    onDetailClick: (data: Film) => void
}

const MovieListItem = ({data, index, expanded, onClick, onDetailClick} : Props): JSX.Element => {

    const { Colours } = useColor();
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
                <Pressable style={style(Colours).detailButtonContainer} onPress={btnDetailClick}>
                    <TextLabel color={Colours.purple} showUnderline underlineType={'underline'} mr={8} fontSize={18}>
                        {String.detail}
                    </TextLabel>
                    <FontAwesomeIcon icon={ faChevronRight } color={Colours.purple} />
                </Pressable>
            </>
        )
    };

    const renderHeader = (): JSX.Element => {
        return (
            // @ts-ignore
            <View style={style(Colours).headerContainer(expanded)}>
                <TextLabel bold mr={10} style={{flex: 1}} fontSize={16} color={Colours.davysBlack}>
                    {data.title}
                </TextLabel>
                <FontAwesomeIcon icon={ expanded ? faChevronUp : faChevronDown } color={Colours.davysBlack} />
            </View>
        )
    };

    return (
        <Pressable onPress={onItemClick}>
            <View style={style(Colours).container}>
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
                paddingVertical: px(20),
                paddingHorizontal: px(16),
                marginVertical: px(10),
                backgroundColor: color.white,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
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
                alignItems: 'center',
                marginTop: px(8)
            }
        })
    )
};
export default MovieListItem;
