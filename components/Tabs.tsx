import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from './screens/movies/Movies';
import Series from './screens/series/Series';
import { Image } from 'react-native';

const Tabs = () => {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName='Movies' screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Movies' component={ Movies } options={{
        tabBarIcon: () => (<Image source={require("../asset/movie.png")} style={{width: 30, height: 30}} />)
      }}/>
      <Tab.Screen name='Series' component={ Series } options={{
        tabBarIcon: () => (<Image source={require("../asset/movie.png")} style={{width: 30, height: 30}} />)
      }}/>
    </Tab.Navigator>
  )
}

export default Tabs