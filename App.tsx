

import { NavigationContainer } from '@react-navigation/native';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import Tabs from './components/Tabs';
import { Color } from './components/utils/color/colors';
import Navbar from './components/utils/navbar/Navbar';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#051a00": "#eafffe",
  };

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={ "#fff" }
      />
      <Navbar />
      <Tabs />
    </NavigationContainer>
    
  );
};

export default App;
