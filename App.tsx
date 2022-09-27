import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import Tabs from './components/Tabs';
import Navbar from './components/utils/navbar/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#051a00": "#eafffe",
  };

  return (
    <NavigationContainer>
      <QueryClientProvider client={ queryClient } >
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={ "#fff" }
        />
        <Navbar />
        <Tabs />
      </QueryClientProvider>   
    </NavigationContainer>
    
  );
};

export default App;
