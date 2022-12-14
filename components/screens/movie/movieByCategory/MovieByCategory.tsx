import { FlatList, Text } from 'react-native';
import { Movie, MovieProp } from '../../../../types/movie';
import Card from '../../../utils/card/Card'
import Loading from '../../../utils/loading/Loading';
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Genre, GENRES } from '../../../../asset/genres';
import { Wrapper } from './styles/Styles';
import { Color } from '../../../utils/color/colors';

export default function MovieByCategory({ navigation, route }: any) {

  const [ genre, setGenre ] = useState<string>(route.params.genre);
  const [ open, setOpen ] = useState<boolean>(false);
  const [ items, setItems ] = useState<Genre[]>(GENRES);
  
  const { isFetching, data, hasNextPage, fetchNextPage, isFetchingNextPage, isError, refetch } =
    useInfiniteQuery('moviesByCategory', async ({ pageParam = 1 }) => {
      const result = await axios.get(`https://yts.mx/api/v2/list_movies.json?&genre=${ genre }&limit=15&page=${pageParam}`);
      return { 
        result, 
        nextPage: pageParam + 1, 
        totalPages: 80
      };

    } , {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      }, cacheTime: 0, refetchOnWindowFocus: true,
      staleTime: 0,
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

  useEffect(() => {
    refetch()
  }, [genre])

  if(isFetching) return <Loading size={ 70 } />
  if(isError) return navigation.navigate('Error');

  return (
    <Wrapper>
        <DropDownPicker
            containerStyle={{ paddingHorizontal: 10, marginBottom: 20 }}
            dropDownContainerStyle={{ marginLeft: 10 , borderColor: Color.main, borderWidth: 2,  }}
            open={ open }
            value={ genre }
            items={ items }
            setOpen={ setOpen }
            setValue={ setGenre }
            setItems={ setItems }
            />
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
    </Wrapper> 
  )
}