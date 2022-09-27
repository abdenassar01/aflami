import { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native';
import { Movie } from '../../../../types/movie';
import Card from '../../../utils/card/Card'
import Loading from '../../../utils/loading/Loading';
import { Wrapper } from './styles/Styles'
import { useInfiniteQuery } from "react-query";
import axios from "axios";

export default function MoviesList({ navigation }: any) {


  const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage, isError } =
    useInfiniteQuery('movies', async ({ pageParam = 1 }) => {
      const result = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=15&page=${pageParam}`)
      console.log(result.data.data.movies)
      // console.log("page number: " + pageParam)
      return { 
        result, 
        nextPage: pageParam + 1, 
        totalPages: Math.ceil(result.data.movie_count /15) 
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

  const renderItem = ({item}) => {
    return (
      <Card key={ item.id } navigation={ navigation } movie={ item } />
    );
  };

  const gameItemExtractorKey = (item) => {
    return Math.random().toString()
  };

  if(isLoading) return <Loading size={ 70 } />
  if(isError) return <Text>Error Occured</Text>

  return (
    // <Wrapper  >
      <FlatList
          contentContainerStyle={{ width: "100%", justifyContent: "center" }}
          numColumns={3}
          data={ data?.pages.map(page => page?.result.data?.data?.movies).flat() }
          keyExtractor={ gameItemExtractorKey }
          renderItem={ renderItem }
          onEndReached={ loadMore }
          onEndReachedThreshold={ 0.3 }
          ListFooterComponent={ isFetchingNextPage ? <Loading size={ 50 } /> : null}
        />
    // </Wrapper>
  )
}