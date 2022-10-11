import { View, Text } from 'react-native'
import { MovieSuggestionProp } from '../../../types/movie'
import { SuggestionsWrapper } from './styles/Styles'

export default function Suggesetions({ id }: MovieSuggestionProp) {
  return (
    <SuggestionsWrapper >
      <Text>Suggesetions Movie Id: { id }</Text>
    </SuggestionsWrapper>
  )
}