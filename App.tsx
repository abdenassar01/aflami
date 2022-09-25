

import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StatusBar,
  Text,
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
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Text style={{fontSize: 40}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, esse itaque. Velit laudantium saepe, voluptatem consequatur eligendi, iure magni, voluptatibus quis optio vitae molestias sunt reiciendis doloribus recusandae repudiandae ab?</Text>

        <Tabs />
      </SafeAreaView>
    </NavigationContainer>
    
  );
};

export default App;
