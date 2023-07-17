import {
    useColorScheme
} from "react-native";
import {Colours} from "../theme/Colour";

const useColor = () => {
    const theme = useColorScheme();
    return {
        Colours: Colours[theme ?? "light"]
    }
};

export default useColor;
