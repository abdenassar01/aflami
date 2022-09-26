import { useEffect, useState } from 'react'
import { Text } from 'react-native';
import { Movie } from '../../../../types/movie';
import Card from '../../../utils/card/Card'
import Loading from '../../../utils/loading/Loading';
import { Wrapper } from './styles/Styles'

export default function MoviesList({ navigation }: any) {

  const [ movies, setMovies ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    async function fetchData(){
      setLoading(true);
     
      try{
        const res = await fetch("https://yts.mx/api/v2/list_movies.json?limit=21");
        const json = await res.json();
        setMovies(json.data?.movies);
      }catch(ex){
        setError(true)
      }
      
      setLoading(false);
    } 
    fetchData();
  },[])

  if(loading) return <Loading size={ 70 } />
  if(error) return <Text>Error Occured</Text>

  return (
    <Wrapper contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", width: "100%", justifyContent: "center" }} >

      {
        movies.map((movie: Movie) => <Card key={ movie.id } navigation={ navigation } movie={ movie } /> )
      }
      
    </Wrapper>
  )
}