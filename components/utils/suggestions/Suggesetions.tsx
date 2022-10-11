import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Movie, MovieSuggestionProp } from '../../../types/movie'
import Card from '../card/Card'
import Loading from '../loading/Loading'
import { Heading, SuggestionsWrapper } from './styles/Styles'

export default function Suggesetions({ id }: MovieSuggestionProp) {

  const navigation = useNavigation();

  const { isLoading, error, data } = useQuery("getMovieSuggestion", async () => {
    try{
      const result = await axios.get(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${ id }`);
      console.log(data?.data?.movies)
      return result.data
    }
    catch(error){
      return error
    }
  })

  if(isLoading) return <Loading size={ 20 } />
  if(error) return <Heading>can't load suggested movies. check network and try again</Heading>

  return (
    <SuggestionsWrapper 
      contentContainerStyle={{ width: "100%", backgroundColor: "white", flexDirection: 'row' }}  
    >
      {
        data?.data?.movies?.map((movie:Movie) => 
          <Card key={ movie.id } movie={ movie } navigation={ navigation } />
        )
      }
    </SuggestionsWrapper>
  )
}