import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from './screens/movies/Movies';

const Tabs = () => {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName='Movies'>
      <Tab.Screen name='Movies' component={ Movies }/>
      <Tab.Screen name='Series' component={ Movies }/>
    </Tab.Navigator>
  )
}

export default Tabs