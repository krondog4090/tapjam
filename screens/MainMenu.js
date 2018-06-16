import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const bg1 = require('../assets/images/bg1.jpg');

export default class Login extends React.Component {
    static navigationOptions = {
        header: null,
    };
    
    render() {
        const { navigate } = this.props.navigation;

        goLeagueMode = () => {
            console.log('pressed league mode!');
            navigate('LeagueMenu');
        }
        goPracticeMode = () => {
            console.log('pressed practice mode!');
            navigate('Practice');
        }
        return (
            <View
                source={bg1}
                style={styles.container}>
                <Text style={styles.mainText} >Tap Jam</Text>
                <View style={styles.buttonLayout}>
                    <Button
                        title="League"
                        onPress={() => goLeagueMode()} 
                        />
                    <Button
                        title="Practice"
                        onPress={() => goPracticeMode()} 
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: "rgba(46,46,48,.9)"
    },
    buttonLayout: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'

    },
    mainText: {
        fontSize: 38
    }
});