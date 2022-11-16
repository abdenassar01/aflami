import { createStackNavigator } from '@react-navigation/stack';
import ErrorScreen from '../error/ErrorScreen';
import MovieByCategory from './movieByCategory/MovieByCategory';
import MovieDetails from './movieDetails/MovieDetails';
import MovieListScreen from './movieList/screen/MovieListScreen';
import SearchMovie from './searchMovie/SearchMovie';

const Stack = createStackNavigator();

export default function MovieStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='MovieListScreen' component={ MovieListScreen } />
      <Stack.Screen name='MovieDetails' component={ MovieDetails } />
      <Stack.Screen name='MovieByCategory' component={ MovieByCategory } />
      <Stack.Screen name='SearchMovie' component={ SearchMovie } />
      <Stack.Screen name='Error' component={ ErrorScreen } />
    </Stack.Navigator>
  )
}