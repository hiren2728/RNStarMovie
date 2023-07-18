import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView
} from "react-native";


// Third Party
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useQuery} from "@apollo/client";
import _ from "lodash"
import { fromGlobalId } from 'graphql-relay';

// Config
import Routes from "../../navigation/Routes";
import {FILE_DETAIL_QUERY} from "../../api/graphQuery/FilmQuery"

// Component
import Loader from "../../components/atom/Loader";
import TextLabel from "../../components/atom/TextLabel";
import NetworkErrorView from "../../components/molecules/NetworkErrorView";

// Types
import RootPropType from "../../navigation/NavigationStackProps";
import {FilmDetail} from "../../types/film";

// Utils
import {px} from "../../utils/ScreenUtil";
import String from "../../language/Strings";


type Props = NativeStackScreenProps<RootPropType, Routes.MovieDetail>

const MovieDetails = ({route} : Props): JSX.Element => {

    const { filmID } = route.params;
    const { id } = fromGlobalId(filmID);
    const { data, error, loading } = useQuery(FILE_DETAIL_QUERY, {
        variables: {
            filmId: id
        }
    });

    const filmDetail: FilmDetail = _.get(data, "film", {});

    const renderError = (): JSX.Element => {
        return (
            <NetworkErrorView error={error?.message ?? ""}/>
        )
    };

    const renderTitleInfoLabel = (title: string, content: string) => {
        return(
            <TextLabel bold numberOfLine={0} className={`mb-2 text-base`}>
                {title + " "}
                <TextLabel className={'text-sm'}>
                    {content}
                </TextLabel>
            </TextLabel>
        )
    };

    const renderMovieDetail = (): JSX.Element | null => {
        if(loading)
            return null;

        return (
            <>
                <TextLabel bold numberOfLine={0} className={'mb-2.5 text-xl'}>
                    {filmDetail.title}
                </TextLabel>

                {renderTitleInfoLabel(String.releaseData, filmDetail.releaseDate)}
                {renderTitleInfoLabel(String.director, filmDetail.director)}
                {renderTitleInfoLabel(String.producer, filmDetail.producers.join(","))}

                <TextLabel className={'mt-5 text-center text-sm'}>
                    {filmDetail.openingCrawl}
                </TextLabel>
            </>
        )
    };

    return (
        <SafeAreaView  className={'flex-1 bg-white'}>
            <ScrollView  className={'flex-1 bg-white'} contentContainerStyle={style.scrollContainer}>
                {
                    error ? renderError() : renderMovieDetail()
                }
            </ScrollView>
            <Loader visible={loading}/>
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    scrollContainer: {
        padding: px(16)
    },
});

export default MovieDetails;
