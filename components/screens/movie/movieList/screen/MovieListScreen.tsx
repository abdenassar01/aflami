import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Color } from "../../../../utils/color/colors";
import MoviesList from "../components/MoviesList";
import { StyledText, Wrapper } from "./styles/Styles";

export default function MovieListScreen({ navigation }: any) {

  return (
    <Wrapper>
      <MoviesList navigation={ navigation } />
    </Wrapper>
  )
}