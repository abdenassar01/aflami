import axios from 'axios';
import { useEffect } from 'react';
import { ScrollView, Text } from 'react-native'
import { useQuery } from 'react-query';
import { Movie } from '../../../../types/movie';
import Card from '../../../utils/card/Card';
import Loading from '../../../utils/loading/Loading';

export default function SearchMovie({ route, navigation }: any) {

    const title = route.params.movieTitle;

    const { isFetching, data, error, refetch } = useQuery("SearchMovieByName", async () => {
        const result = await axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${ title }&limit=10`);
        return result.data
    })

    useEffect(() => {
     refetch()
    }, [title])
    

    if( isFetching ) return <Loading size={ 30 } />
    if( error ) return <Text>Error </Text>

  return (
    <ScrollView 
        contentContainerStyle={{ width: "100%", flexDirection: 'row', flexWrap: 'wrap', justifyContent: "center", backgroundColor: "white" }}  
        >
        {
            data?.data?.movies?.map((movie:Movie) => 
                <Card key={ movie.id } movie={ movie } navigation={ navigation } />
            )
        }
    </ScrollView>
  )
}