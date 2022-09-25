import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from './screens/movies/Movies';

const Tabs = () => {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name='Movies' component={ Movies }/>
    </Tab.Navigator>
  )
}

export default Tabs