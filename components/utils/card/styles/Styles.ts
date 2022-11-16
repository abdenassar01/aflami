import { Image, Text, View, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const CardWrapper = styled(Pressable)`
    width: 32%;
    margin-right: 2%;
    margin-bottom: 5%;
`

export const Cover = styled(Image)`
    height: 170px;
    width: 100%;
    border-radius: 5px;
`

export const Title = styled(Text)`
    font-size: 10px;
    text-align: center;
`
