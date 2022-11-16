import { GoBackBtn } from '../movie/movieDetails/styles/Styles'
import { ButtonText, ErrorWrapper, Heading, Illistration, SmalHeading } from './styles/Styles'

export default function ErrorScreen({ navigation }: any) {
  return (
    <ErrorWrapper>
      <Illistration source={ require('../../../asset/error.png')} ></Illistration>
      <Heading>Ooops. Something Wrong Happend.</Heading>
      <SmalHeading>Please check your network status.</SmalHeading>
      <GoBackBtn onPress={ () => navigation.navigate('MovieListScreen') }>
        <ButtonText>Go Home</ButtonText>
      </GoBackBtn>
    </ErrorWrapper>
  )
}