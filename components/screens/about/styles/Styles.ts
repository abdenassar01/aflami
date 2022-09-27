import { Color } from './../../../utils/color/colors';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styled from "styled-components";

export const Wrapper = styled(ScrollView)`
    padding: 20px 10px;
    background-color: white;
`

export const Heading = styled(Text)`
    padding: 5px 0;
    font-size: 18px;
    font-weight: bold;
    color: ${ Color.main };
`

export const Paragraph = styled(Text)`
    color: black;
    font-size: 12px;
    margin: 5px 0;
`

export const Profile = styled(View)`
    margin: 10px 0;
    flex-direction: row;
`

export const ProfileImg = styled(Image)`
    width: 160px;
    height: 200px;
    border-radius: 10px;
`

export const ProfileInfos = styled(View)`
    padding: 10px;
`

export const Name = styled(Text)`
    font-size: 13px;
    color: black;
    font-weight: bold;
`

export const LinksWrapper = styled(View)`
    margin: 20px 0;
    flex-direction: row;
`

export const Link = styled(TouchableOpacity)`
    margin-right: 10px;
    padding: 5px 20px;
    border-radius: 3px;

    background-color: ${ props => props.color ?  props.color : Color.main };
`

export const LinkText = styled(Text)`
    font-size: 12px;
    color: white;
    font-weight: bold;
`