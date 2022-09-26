import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Series from './screens/series/Series';
import { Image } from 'react-native';
import MovieStack from './screens/movie/MovieStack';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName='Movies' screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Movies' component={ MovieStack } options={{
        tabBarIcon: () => (<Image source={ require("../asset/movie.png")} style={{width: 30, height: 30}} />)
      }}/>
      <Tab.Screen name='Series' component={ Series } options={{
        tabBarIcon: () => (<Image source={ require("../asset/film.png")} style={{width: 30, height: 30}} />)
      }}/>
    </Tab.Navigator>
  )
}

export default Tabs