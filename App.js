import { createStackNavigator } from 'react-navigation';
import MainMenu from './screens/MainMenu';
import Practice from './screens/practice/Practice';
import LeagueMenu from './screens/league/LeagueMenu';
import Court from './screens/league/Court';

// Western Teams
// Eastern Teams


export default createStackNavigator({
  // MainMenu: {
  //   screen: MainMenu
  // },
  LeagueMenu: {
    screen: LeagueMenu
  },
  // Practice: {
  //   screen: Practice
  // },
  // Western Teams
  Court: {
    screen: Court
  }
  // Eastern Teams 
});
