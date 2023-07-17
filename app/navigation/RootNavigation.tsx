import * as React from 'react';

// Third Party
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack';

// Component
import MovieList from "../screen/MovieList";
import MovieDetails from "../screen/MovieDetail";

// Config
import Routes from "./Routes";
import RootStackParamList from "./NavigationStackProps";
import {scaleFontSize} from "../utils/ScreenUtil";
import useColor from "../hooks/useColorStyle";
import Font from "../assets/fonts/Fonts";
import String from "../language/Strings";

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigation() {
    const { Colours } = useColor();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.MovieList} screenOptions={{
                headerBackTitleVisible: false,
                headerTintColor: Colours.davysBlack,
                headerTitleStyle: {
                    color: Colours.davysBlack,
                    fontSize: scaleFontSize(20),
                    fontFamily: Font.BOLD,
                },
            }}>
                <Stack.Screen name={Routes.MovieList}
                              options={{
                                  title: String.movies,
                              }}
                              component={MovieList}/>
                <Stack.Screen name={Routes.MovieDetail}
                              options={{
                                  title: String.movieDetail
                              }} component={MovieDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
