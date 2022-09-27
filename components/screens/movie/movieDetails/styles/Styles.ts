import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styled from "styled-components";
import { Color } from "../../../../utils/color/colors";

export const MovieDetailsWrapper = styled(ScrollView)`
    background-color: white;
    min-height: 100%;
`

export const GoBackBtn = styled(TouchableOpacity)`
    padding: 10px;
`

export const ButtonText = styled(Text)`
    color: #7ea6fc;
    font-weight: bold;
    font-size: 16px;
`

export const DetailsWrapper = styled(View)`
    display: flex;
    padding: 0 10px;
`

export const Streamer = styled(Image)`
    width: 100%;
    height: 220px;
    border-radius: 10px;
`

export const Title = styled(Text)`
    font-size: 18px;
    margin: 5px 0;
    font-weight: bold;
    color: black;
`

export const Info = styled(View)`
    margin: 5px 0;
`

export const SmallHeading = styled(Text)`
    font-size: 12px;
    color: #070606;
`

export const Heading = styled(Text)`
    margin: 5px 0;
    font-size: 14px;
    color: black;
    font-weight: 500;
`

export const GenresWrapper = styled(View)`
    flex-direction: row;
`

export const GenreItem = styled(TouchableOpacity)`
    
`

export const Genre = styled(Text)`
    color: ${ Color.main };
    margin-right: 20px; 
    font-weight: 500;
`

export const Qualities = styled(ScrollView)`
    margin: 10px 0;
`

export const QualityItem = styled(TouchableOpacity)`
    padding: 5px 20px;
    border-radius: 10px;
    margin-right: 10px;
    background-color: ${ Color.main };
`

export const QualityItemText = styled(Text)`
    font-weight: 700;
    color: white;
`

export const Play = styled(TouchableOpacity)`
    position: absolute;
    left: 43%;
    top: 15%;
`

export const PlayIcon = styled(Image)`

`