import React from 'react';
import { View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import WesternIndex from './western/WesternIndex';
import EasternIndex from './eastern/EasternIndex';

class LeagueMenu extends React.Component {
    static navigationOptions = () => ({
        headerStyle: {
          backgroundColor: '#EC1E4F',
          height: 35
        },
      });
    render() {
        return (
            <View style={styles.container}>
                <WesternIndex />
                <EasternIndex />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#0E69AA'
    }
});

export default withNavigation(LeagueMenu);