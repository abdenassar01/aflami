import MoviesList from "../components/MoviesList";
import {  Wrapper } from "./styles/Styles";

export default function MovieListScreen({ navigation }: any) {

  return (
    <Wrapper>
      <MoviesList navigation={ navigation } />
    </Wrapper>
  )
}