import { Image, Text, View, Pressable } from "react-native";
import styled from "styled-components";

export const CardWrapper = styled(Pressable)`
    padding: 5px;
    width: 125px;
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
