

import { NavigationContainer } from '@react-navigation/native';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import Tabs from './components/Tabs';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#051a00": "#eafffe",
  };

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Tabs />
    </NavigationContainer>
    
  );
};

export default App;
