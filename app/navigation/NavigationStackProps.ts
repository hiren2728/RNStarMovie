import Routes from "./Routes";

type RootStackParamList = {
    [Routes.MovieList]: undefined,
    [Routes.MovieDetail]: {
        filmID: string
    }
}

export default RootStackParamList
