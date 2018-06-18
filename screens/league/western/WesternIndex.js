import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Font } from 'expo';

// Fonts
import { dallasFont } from '../../../assets/fonts/FontList';
import { denverFont } from '../../../assets/fonts/FontList';
import { goldenStateFont } from '../../../assets/fonts/FontList';
import { laC } from '../../../assets/fonts/FontList';
import { laL } from '../../../assets/fonts/FontList';
import { memphis } from '../../../assets/fonts/FontList';
import { min } from '../../../assets/fonts/FontList';
import { newOrleans } from '../../../assets/fonts/FontList';
import { okc } from '../../../assets/fonts/FontList';
import { phoenix } from '../../../assets/fonts/FontList';
import { portland } from '../../../assets/fonts/FontList';
import { sacramento } from '../../../assets/fonts/FontList';
import { sanAntonio } from '../../../assets/fonts/FontList';
import { utah } from '../../../assets/fonts/FontList';
import { nbaFont } from '../../../assets/fonts/FontList';

class WesternIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        }
    }

    componentDidMount() {
        Font.loadAsync({
            'dallas': dallasFont,
            'denver': denverFont,
            'goldenState': goldenStateFont,
            'clippers': laC,
            'lakers': laL,
            'memphis': memphis,
            'min': min,
            'newOrleans': newOrleans,
            'okc': okc,
            'phoenix': phoenix,
            'portland': portland,
            'sacremento': sacramento,
            'sanAntonio': sanAntonio,
            'utah': utah,
            'nbaFont': nbaFont

        }).then(() => {
            this.setState({
                fontLoaded: true, // change to true
            });
        });
    }

    render() {
        const { fontLoaded } = this.state;
        const { navigate } = this.props.navigation;

        goDallasTeam = () => {
            navigate('Dallas');
        }
        goDenverTeam = () => {
            alert(
                'This will take you to the Denver Page'
            )
        }
        goGoldenStateTeam = () => {
            alert(
                'This will take you to the Golden State Page'
            )
        }

        return (
            <View style={styles.container}>
                <View style={styles.westContainer}>
                    <Text style={[styles.westText, fontLoaded && { fontFamily: 'nbaFont'}]}>WESTERN</Text>
                </View>
                {/* TEAMS */}
                <ScrollView>
                <TouchableOpacity 
                    style={[styles.teamBox, { backgroundColor: "#094B93" }]}
                    onPress={() => goDallasTeam()}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'dallas', color: "#EAEAEA"}]}>Dallas</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.teamBox, {backgroundColor: "#5591CA"}]}
                    onPress={() => goDenverTeam()}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'denver', color: "#FBB83C"}]}>Denver</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.teamBox, {backgroundColor: "#0F6DB4"}]}
                    onPress={() => goGoldenStateTeam()}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'goldenState', color: "#F6C848"}]}>Golden State</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#CA0814"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'goldenState', color: "#FFFFFF"}]}>Houston</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#E21E4B"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'clippers', color: "#116FB7"}]}>Los Angeles</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#F3AE33"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'lakers',color: "#4A2981"}]}>Los Angeles</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#587CA4"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'memphis', color: "#FED346"}]}>Memphis</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#0D243F"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'min', color: "#62954B"}]}>Minnesota</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#071F3D"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'newOrleans', color: "#B9975E"}]}>New Orleans</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#1684C6"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'okc', color: "#EE513C"}]}>Oklahoma City</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#201A48"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'phoenix', color: "#E1702C"}]}>Phoenix</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#CA0813"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'portland', color: "#190303"}]}>Portland</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#592E80"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'sacremento', color: "#627079"}]}>Sacramento</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#040404"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'sanAntonio', color: "#DED0D8"}]}>San Antonio</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#184B29"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'utah', color: "#0F233F"}]}>Utah</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>
                </ScrollView>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E69AA',
    },
    westContainer: {
        backgroundColor: '#EC1E4F',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#d6d7da'
    },
    westText: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold'
    },
    teamBox: {
        padding: 11.5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "black",
        borderWidth: .5,
        borderColor: '#d6d7da',
      },
    teamText: {
        fontWeight: 'bold',
        paddingLeft: 5,
        textAlign: 'auto',
        flex: 1,
        fontSize: 18
      },
      scoreText: {
        paddingRight: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
      },
});

export default withNavigation(WesternIndex);