import { Dimensions, Platform, PixelRatio } from "react-native";

/*
 * Always treat height/width as device in portrait.
 * These values are not re-calculated on device rotation,
 * as they have been defined globally. But sometimes, when the
 * component is re-mounted, they are recomputed and that causes
 * incorrectly sized elements on the screen. Hence consider these
 * values to be physical dimensions unaffected by rotation.
 */
const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
const height = Math.max(windowHeight, windowWidth);
const width = Math.min(windowHeight, windowWidth);

export const DESIGN_WIDTH: number = 375;
export const DESIGN_HEIGHT: number = 667;

export const scaleWidth = (viewWidth: number): number => {
    return Math.round((width / DESIGN_WIDTH) * viewWidth);
};

export const scaleHeight = (viewHeight: number): number => {
    return Math.round((height / DESIGN_HEIGHT) * viewHeight);
};

export const px = (size: number, based : string = "width"): number => {
    const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
    // based on iPhone 7's scale
    const guidelineBaseWidth = 375;
    const guidelineBaseHeight = 667;

    const [shortDimension, longDimension] =
        deviceWidth < deviceHeight
            ? [deviceWidth, deviceHeight]
            : [deviceHeight, deviceWidth];

    const wscale = shortDimension / guidelineBaseWidth;
    const hscale = longDimension / guidelineBaseHeight;
    const newSize = based === "height" ? size * hscale : size * wscale;

    if (Platform.OS === "ios") {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export const scaleFontSize = (fontSize: number): number => {
    const ScreenDimension = Dimensions.get('window');
    const {width, height} = ScreenDimension;
    const realWidth = height > width ? width : height;
    let divider = 375;
    return Math.round(fontSize * realWidth / divider);
};

export const SCREEN_WIDTH: number = windowWidth;
export const SCREEN_HEIGHT: number = windowHeight;
