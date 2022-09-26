import styled from "styled-components"
import { Image, TextInput, View } from "react-native";

export const NavBarWrapper = styled(View)`
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

export const Logo = styled(Image)`

`

export const Field = styled(View)`
    flex-direction: row;
`

export const InputField = styled(TextInput)`
    width: 85%;
`

export const SearchAvatar = styled(Image)`

`