import { Image, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Color } from "../../../utils/color/colors";

export const ErrorWrapper = styled(View)`
    flex: 1;
    padding: 0px 10px;
    background-color: white;
    align-items: center;
    justify-content: center;
`

export const Illistration = styled(Image)`
    width: 100%;
    height: 300px;
`

export const Heading = styled(Text)`
    text-align: center;
    font-weight: 700;
    color: ${ Color.main };
`
export const SmalHeading = styled(Heading)`
    font-size: 12px;
    font-weight: 300;
`

export const GoHomeButton = styled(TouchableOpacity)`
    
`

export const ButtonText = styled(Text)`
    padding: 10px 42px;
    color: white;
    font-weight: 500;
    border-radius: 50px;
    background-color: ${ Color.main };
`