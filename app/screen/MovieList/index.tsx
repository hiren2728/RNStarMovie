import React, {useState} from "react"
import {
    View,
    SafeAreaView,
    FlatList,
    UIManager,
    Platform,
} from "react-native"

// Third Party
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useQuery} from "@apollo/client";
import _ from "lodash"

// Config
import {FILM_LIST_QUERY} from "../../api/graphQuery/FilmQuery"
import Routes from "../../navigation/Routes";

// Types
import {Film} from "../../types/film";
import type RootPropType from "../../navigation/NavigationStackProps"

// Component
import MovieListItem from "./MovieListItem";
import Loader from "../../components/atom/Loader";
import NetworkErrorView from "../../components/molecules/NetworkErrorView";

// Utils
import useColor from "../../hooks/useColorStyle";
import getCommonStyle from "../../utils/CommonStyle";

type Props = NativeStackScreenProps<RootPropType, Routes.MovieList>

if(Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const MovieList = ({navigation}: Props): JSX.Element => {

    const { Colours } = useColor();
    const [expandedIndex, setExpanded] = useState<number>(-1);

    const {data, error, loading} = useQuery(FILM_LIST_QUERY);
    const films: Film[] = _.get(data, "allFilms.films", []);

    const onListItemClick = (index: number): void => {
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(prevState => index === prevState ? -1 : index)
    };

    const onListItemDetailClick = (data: Film): void => {
        navigation.push(Routes.MovieDetail, {
            filmID: data.id
        });
    };

    const renderListItem = ({item, index}: { item: Film, index: number }): JSX.Element => {
        return (
            <MovieListItem data={item}
                           index={index}
                           onClick={onListItemClick}
                           onDetailClick={onListItemDetailClick}
                           expanded={index === expandedIndex}/>
        );
    };

    const renderFilmList = (): JSX.Element => {
        return (
            <FlatList data={films}
                      keyExtractor={(item) => item.id}
                      renderItem={renderListItem}/>
        )
    };

    const renderError = (): JSX.Element => {
        return (
            <NetworkErrorView error={error?.message ?? ""}/>
        )
    };

    return (
        <SafeAreaView style={getCommonStyle(Colours).safeArea}>
            <View style={getCommonStyle(Colours).container}>
                {error ? renderError() : renderFilmList()}
            </View>
            <Loader visible={loading}/>
        </SafeAreaView>
    )
};

export default MovieList;
