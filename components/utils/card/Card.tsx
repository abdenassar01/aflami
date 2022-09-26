import { CardProps } from '../../../types/movie'
import { CardWrapper, Cover, Title } from './styles/Styles'

export default function Card({ navigation, movie }: CardProps) {
  return (
    <CardWrapper onPress={() => navigation.navigate('MovieDetails')}>
      <Cover source={{ uri: movie.medium_cover_image }}/>
      <Title>{ movie.title }</Title>
    </CardWrapper>
  )
}