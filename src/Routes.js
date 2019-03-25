import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import SaveCard from './components/SaveCard';

export const MainNavigator = createStackNavigator(
  {
    Home: Home,
    SaveCard: SaveCard
  },
  {
    initialRouteName: 'Home'
  }
);
