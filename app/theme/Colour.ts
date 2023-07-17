import {lightColour} from "./lightColour";
import {darkColour} from "./darkColour";

export type ColourType = {
    davysBlack: string,
    purple: string,
    lavender: string,
    grullo: string,
    silver: string,
    white: string,
    red: string,
}

export const Colours = {
    light: lightColour,
    dark: darkColour
};
