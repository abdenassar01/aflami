import axios from 'axios';
import { Text } from 'react-native'
import { useQuery } from 'react-query';
import { Movie } from '../../../../types/movie';
import Card from '../../../utils/card/Card';
import Loading from '../../../utils/loading/Loading';
import { ScreenWrapper } from './styles/Styles';

export default function SearchMovie({ route, navigation }: any) {

    const title = route.params.movieTitle;

    const { isLoading, data, error } = useQuery("SearchMovieByName", async () => {
        const result = await axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${ title }&limit=9`);
        console.log(result.data)
        return result.data
    })

    if( isLoading ) return <Loading size={ 30 } />
    if( error ) return <Text>Error: { error?.message } </Text>

  return (
    <ScreenWrapper>
        {
            data?.data.movies.map((movie:Movie) => 
                <Card key={ movie.id } movie={ movie } navigation={ navigation } />
            )
        }
    </ScreenWrapper>
  )
}