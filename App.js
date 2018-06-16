import { createStackNavigator } from 'react-navigation';
import MainMenu from './screens/MainMenu';
import Practice from './screens/practice/Practice';
import LeagueMenu from './screens/league/LeagueMenu';

// Western Teams
import Dallas from './screens/league/western/westernteams/Dallas/Dallas';

// Eastern Teams


export default createStackNavigator({
  // MainMenu: {
  //   screen: MainMenu
  // },
  // LeagueMenu: {
  //   screen: LeagueMenu
  // },
  // Practice: {
  //   screen: Practice
  // },
  // Western Teams
  Dallas: {
    screen: Dallas
  }
  // Eastern Teams 
});
