import React, {PropsWithChildren} from "react";
import {
    Text, TextStyle
} from "react-native"
import {px, scaleFontSize} from "../../utils/ScreenUtil";
import Font from "../../assets/fonts/Fonts";

type Props = {
    fontSize?: number
    bold?: boolean,
    medium?: boolean,
    light?: boolean,
    thin?: boolean,
    color?: string,
    mt?: number | null,
    mb?: number | null,
    ml?: number | null,
    mr?: number | null,
    mh?: number | null,
    mv?: number | null,
    align?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined,
    lineHeight?: number | null,
    numberOfLine?: number,
    textProps?: object,
    showUnderline?: boolean,
    underlineType?: | 'none'
        | 'underline'
        | 'line-through'
        | 'underline line-through'
        | undefined,
    style?: TextStyle
}

const TextLabel = ({
                       fontSize = 12,
                       bold = false,
                       medium = false,
                       light = false,
                       thin= false,
                       color = 'black',
                       mt = null,
                       mb = null,
                       ml = null,
                       mr = null,
                       mh = null,
                       mv = null,
                       lineHeight= null,
                       align = "left",
                       numberOfLine = undefined,
                       textProps = {},
                       showUnderline = false,
                       underlineType = "none",
                       children,
                       style
                   }: PropsWithChildren<Props>): JSX.Element => {

    const styleArray: TextStyle[] = [];

    if(lineHeight)
        styleArray.push({
            lineHeight: scaleFontSize(lineHeight)
        });

    let fontFamily;

    if(bold)
        fontFamily = Font.BOLD;
    else if(medium)
        fontFamily = Font.REGULAR;
    else if(light)
        fontFamily = Font.LIGHT;
    else if(thin)
        fontFamily = Font.THIN;
    else
        fontFamily = Font.REGULAR;

    if (mt)
        styleArray.push({ marginTop: px(mt) });
    if (mb)
        styleArray.push({ marginBottom: px(mb) });
    if (ml)
        styleArray.push({ marginLeft: px(ml) });
    if (mr)
        styleArray.push({ marginRight: px(mr) });
    if (mv)
        styleArray.push({ marginVertical: px(mv) });
    if (mh)
        styleArray.push({ marginHorizontal: px(mh) });

    if(showUnderline)
        styleArray.push({
            textDecorationLine: underlineType
        });

    styleArray.push({
        fontFamily,
        color: color,
        textAlign: align,
        fontSize: scaleFontSize(fontSize)
    });

    style && styleArray.push(style);

    return (
        <Text numberOfLines={numberOfLine} style={styleArray}>
            {children}
        </Text>
    )
};

export default React.memo(TextLabel)
