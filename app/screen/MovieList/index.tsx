import React, {useState} from "react"
import {
    View,
    StyleSheet,
    SafeAreaView,
    FlatList,
    LayoutAnimation,
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
import Loader from "../../components/Loader";

type Props = NativeStackScreenProps<RootPropType, Routes.MovieList>

if(Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const MovieList = ({navigation}: Props): JSX.Element => {

    const [expandedIndex, setExpanded] = useState<number>(-1);

    const {data, error, loading} = useQuery(FILM_LIST_QUERY);
    const films: Film[] = _.get(data, "allFilms.films", []);

    const onListItemClick = (index: number): void => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
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

    return (
        <SafeAreaView style={style.safeArea}>
            <View style={style.container}>
                {renderFilmList()}
            </View>
            <Loader visible={loading}/>
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1
    }
});

export default MovieList;
