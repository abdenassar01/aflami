import { FlatList, Text } from 'react-native';
import { Movie, MovieProp } from '../../../../types/movie';
import Card from '../../../utils/card/Card'
import Loading from '../../../utils/loading/Loading';
import { useInfiniteQuery } from "react-query";
import axios from "axios";

export default function MoviesList({ navigation }: any) {

  const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage, isError } =
    useInfiniteQuery('movies', async ({ pageParam = 1 }) => {
      const result = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=15&page=${pageParam}`)
      return { 
        result, 
        nextPage: pageParam + 1, 
        totalPages: 80
      };

    } , {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      }
    });

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderItem = ({ item } : MovieProp) => {
    return (
      <Card key={ item.id } navigation={ navigation } movie={ item } />
    );
  };

  const gameItemExtractorKey = (item: Movie) => {
    return item.id.toString()
  };

  if(isLoading) return <Loading size={ 70 } />
  if(isError) return <Text>Error Occured</Text>

  return (
    <FlatList
      contentContainerStyle={{ width: "100%", justifyContent: "center", paddingHorizontal: 10 }}
      numColumns={3}
      data={ data?.pages.map(page => page?.result.data?.data?.movies).flat() }
      keyExtractor={ gameItemExtractorKey }
      renderItem={ renderItem }
      onEndReached={ loadMore }
      onEndReachedThreshold={ 0.3 }
      ListFooterComponent={ isFetchingNextPage ? <Loading size={ 50 } /> : null}
    />
  )
}