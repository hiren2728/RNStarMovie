import React, {PropsWithChildren} from "react";
import {
    Text, TextStyle
} from "react-native"

type Props = {
    bold?: boolean,
    medium?: boolean,
    light?: boolean,
    thin?: boolean,
    lineHeight?: number | null,
    numberOfLine?: number,
    textProps?: object,
    style?: TextStyle,
    className?: string
}

const TextLabel = ({
                       bold = false,
                       medium = false,
                       light = false,
                       thin = false,
                       lineHeight = null,
                       numberOfLine = undefined,
                       textProps = {},
                       children,
                       style,
                       className
                   }: PropsWithChildren<Props>): JSX.Element => {

    const styleArray: TextStyle[] = [];
    const styleString: string[] = [
        "text-davysBlack"
    ];

    if (lineHeight) {
        styleString.push(`leading-${Math.round(lineHeight / 4)}`)
    }

    if (bold) {
        styleString.push("font-customBold")
    } else if (medium) {
        styleString.push("font-customMedium")
    } else if (light) {
        styleString.push("font-customLight")
    } else if (thin) {
        styleString.push("font-customThin")
    } else {
        styleString.push("font-customRegular")
    }

    style && styleArray.push(style);

    return (
        <Text numberOfLines={numberOfLine} style={styleArray} className={`${styleString.join(" ")} ${className ?? ""}`}>
            {children}
        </Text>
    )
};

export default React.memo(TextLabel)
