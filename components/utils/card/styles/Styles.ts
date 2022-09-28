import { Image, Text, View, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const CardWrapper = styled(Pressable)`
    width: 30%;
    margin: 5px;
`

export const Cover = styled(Image)`
    height: 170px;
    width: 115px;
    border-radius: 10px;
`

export const Title = styled(Text)`
    font-size: 10px;
    text-align: center;
`
