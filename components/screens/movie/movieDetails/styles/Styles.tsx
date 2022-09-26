import { Pressable, View, Text } from "react-native";
import styled from "styled-components";

export const MovieDetailsWrapper = styled(View)`
    background-color: white;
`

export const GoBackBtn = styled(Pressable)`
    padding: 5px;
`

export const ButtonText = styled(Text)`
    color: #165ffd;
    font-weight: bold;
    font-size: 16px;
`