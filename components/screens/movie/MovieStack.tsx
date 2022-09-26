import { createStackNavigator } from '@react-navigation/stack';
import MovieDetails from './movieDetails/MovieDetails';
import MoviesList from './movieList/MoviesList';

const Stack = createStackNavigator();

export default function MovieStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='MovieList' component={ MoviesList } />
      <Stack.Screen name='MovieDetails' component={ MovieDetails } />
    </Stack.Navigator>
  )
}