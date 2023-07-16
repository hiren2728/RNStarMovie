import * as React from 'react';

// Third Party
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

// Component
import MovieList from "../screen/MovieList";
import MovieDetails from "../screen/MovieDetail";

// Config
import Routes from "./Routes";
import RootStackParamList from "./NavigationStackProps";

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.MovieList}>
                <Stack.Screen name={Routes.MovieList}
                              options={{
                                  title: "Movies"
                              }}
                              component={MovieList}/>
                <Stack.Screen name={Routes.MovieDetail}
                              options={{
                                  title: "Movie Detail"
                              }} component={MovieDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
