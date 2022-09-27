import { useCallback, useEffect, useState } from "react";
import { Alert, Linking, Text } from "react-native";
import { Movie } from "../../../../types/movie";
import Loading from "../../../utils/loading/Loading";
import { ButtonText, DetailsWrapper, Genre, GenreItem, GenresWrapper, GoBackBtn, Heading, Info, MovieDetailsWrapper, Play, PlayIcon, Qualities, QualityItem, QualityItemText, SmallHeading, Streamer, Title } from "./styles/Styles";

export default function MovieDetails({ navigation, route }: any) {

  const id = route.params.id;

  const [ movie, setMovie ] = useState<Movie | undefined>(undefined);
  const [ loading, setLoading ] = useState<Boolean>(false);
  const [ error, setError ] = useState<Boolean>(false);

  useEffect(() => {
    async function fetchData(){
      setLoading(true);
     
      try{
        const res = await fetch(`https://yts.torrentbay.to/api/v2/movie_details.json?movie_id=${ id }`);
        const json = await res.json();
        setMovie(json.data?.movie);
      }catch(ex){
        setError(true)
      }
      
      setLoading(false);
    } 
    fetchData();
  },[])
 
  const handlePress = useCallback(async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
     
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [movie])

  if(loading) return <Loading size={ 70 } />
  if(error) return <Text>Error Occured</Text>

  return (
    <MovieDetailsWrapper>
      <GoBackBtn onPress={ () => navigation.goBack() }>
        <ButtonText>Go Back</ButtonText>
      </GoBackBtn>
      <DetailsWrapper>
        <Streamer source={{ uri: movie?.background_image }} />
        <Title>{ movie?.title }</Title>
        <Play onPress={ () => handlePress(movie?.torrents[0].url ?? "") }>
          <PlayIcon source={require("../../../../asset/play.png")} />
        </Play>
        <Heading>Genres:</Heading>
        <GenresWrapper>
          {
            movie?.genres.map(genre => <GenreItem key={ Math.random() } onPress={ () => console.log(genre) }><Genre>{ genre }</Genre></GenreItem>)
          }
        </GenresWrapper>
        <Info>
          <SmallHeading>Rating: { movie?.rating }</SmallHeading>
          <SmallHeading>Year: { movie?.year }</SmallHeading>
          <SmallHeading>Download Count: { movie?.download_count }</SmallHeading>
        </Info>
        <Heading>Available Quality:</Heading>
        <Qualities horizontal={true}>
          {
            movie?.torrents.map(torrent => <QualityItem key={ torrent.quality } onPress={ () => handlePress(torrent.url ?? "") }><QualityItemText>{ torrent.quality }</QualityItemText></QualityItem>)
          }
        </Qualities>
        <Heading>Discription: </Heading>
        <SmallHeading>
          { movie?.description_full }
        </SmallHeading>
      </DetailsWrapper>
    </MovieDetailsWrapper>
  )
}