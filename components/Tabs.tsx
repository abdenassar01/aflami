import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import MovieStack from './screens/movie/MovieStack';
import AboutScreen from './screens/about/AboutScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName='Movies' screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Movies' component={ MovieStack } options={{
        tabBarIcon: () => (<Image source={ require("../asset/movie.png")} style={{width: 30, height: 30}} />)
      }}/>
      <Tab.Screen name='About' component={ AboutScreen } options={{
        tabBarIcon: () => (<Image source={ require("../asset/film.png")} style={{width: 30, height: 30}} />)
      }}/>
    </Tab.Navigator>
  )
}

export default Tabs