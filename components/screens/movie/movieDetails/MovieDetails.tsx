import { ButtonText, GoBackBtn, MovieDetailsWrapper } from "./styles/Styles";

export default function MovieDetails({ navigation }) {
  return (
    <MovieDetailsWrapper>
      <GoBackBtn onPress={ () => navigation.goBack() }>
        <ButtonText>Go Back</ButtonText>
      </GoBackBtn>
    </MovieDetailsWrapper>
  )
}