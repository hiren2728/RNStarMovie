import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    ScrollView
} from "react-native";


// Third Party
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useQuery} from "@apollo/client";
import _ from "lodash"

// Config
import Routes from "../../navigation/Routes";
import {FILE_DETAIL_QUERY} from "../../api/graphQuery/FilmQuery"

// Component
import Loader from "../../components/Loader";

// Types
import RootPropType from "../../navigation/NavigationStackProps";
import {FilmDetail} from "../../types/film";

// Utils
import {px} from "../../utils/ScreenUtil";

type Props = NativeStackScreenProps<RootPropType, Routes.MovieDetail>

const MovieDetails = ({route} : Props): JSX.Element => {

    const { filmID } = route.params;
    const { data, error, loading } = useQuery(FILE_DETAIL_QUERY, {
        variables: {
            filmId: filmID
        }
    });

    const filmDetail: FilmDetail = _.get(data, "film", {});

    const renderError = (): JSX.Element => {
        return (
            <Text>
                {error?.message}
            </Text>
        )
    };

    const renderMovieDetail = (): JSX.Element | null => {
        if(loading)
            return null;

        return (
            <>
                <Text>
                    {filmDetail.title}
                </Text>
                <Text>
                    {`Release Date: ${filmDetail.releaseDate}`}
                </Text>
                <Text>
                    {`Director: ${filmDetail.director}`}
                </Text>
                <Text>
                    {`Producer: ${filmDetail.producers.join(",")}`}
                </Text>
                <Text>
                    {filmDetail.openingCrawl}
                </Text>
            </>
        )
    };

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={style.container} contentContainerStyle={style.scrollContainer}>
                {
                    error ? renderError() : renderMovieDetail()
                }
            </ScrollView>
            <Loader visible={loading}/>
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        padding: px(16)
    }
});

export default MovieDetails;
