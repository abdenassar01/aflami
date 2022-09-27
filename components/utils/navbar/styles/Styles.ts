import styled from "styled-components"
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { Color } from "../../color/colors";

export const NavBarWrapper = styled(View)`
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
`

export const Logo = styled(Image)`
    width: 40px;
    height: 40px;
    padding: 5px;
`

export const Field = styled(View)`
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    margin: 10px 2px;
    border: 2px solid ${ Color.main };
    border-radius: 50px;
    justify-content: space-between;
`

export const InputField = styled(TextInput)`
    width: 75%;
    height: 40px;
`

export const GoHome = styled(TouchableOpacity)`

`

export const SearchAvatar = styled(Image)`
    height: 30px;
    width: 30px;
`

export const Search = styled(TouchableOpacity)`

`