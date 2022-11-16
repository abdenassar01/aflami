import styled from "styled-components"
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { Color } from "../../color/colors";

export const NavBarWrapper = styled(View)`
    padding: 0 10px;
    display: flex;
    padding-bottom: 10px;
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
    padding: 0 10px;    
    border: 2px solid ${ Color.main };
    border-radius: 50px;
    justify-content: space-between;
`

export const InputField = styled(TextInput)`
    width: 80%;
    height: 35px;
`

export const SearchAvatar = styled(Image)`
    height: 24px;
    width: 24px;
`

export const Search = styled(TouchableOpacity)`

`