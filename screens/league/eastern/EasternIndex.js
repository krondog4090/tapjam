import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Font } from 'expo';

// Fonts
import { atlanta } from '../../../assets/fonts/FontList';
import { boston } from '../../../assets/fonts/FontList';
import { charlotte } from '../../../assets/fonts/FontList';
import { bkn } from '../../../assets/fonts/FontList';
import { chicago } from '../../../assets/fonts/FontList';
import { cleveland } from '../../../assets/fonts/FontList';
import { detroit } from '../../../assets/fonts/FontList';
import { indiana } from '../../../assets/fonts/FontList';
import { miami } from '../../../assets/fonts/FontList';
import { mil } from '../../../assets/fonts/FontList';
import { newyork } from '../../../assets/fonts/FontList';
import { orlando } from '../../../assets/fonts/FontList';
import { philly } from '../../../assets/fonts/FontList';
import { toronto } from '../../../assets/fonts/FontList';
import { washington } from '../../../assets/fonts/FontList'; 
import { nbaFont } from '../../../assets/fonts/FontList';


export default class EasternIndex extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        }
    }

    componentDidMount() {
        Font.loadAsync({
            'atlanta': atlanta,
            'boston': boston,
            'charlotte': charlotte,
            'bkn': bkn,
            'chicago': chicago,
            'cleveland': cleveland,
            'detroit': detroit,
            'indiana': indiana,
            'miami': miami,
            'mil': mil,
            'newyork': newyork,
            'orlando': orlando,
            'philly': philly,
            'toronto': toronto,
            'washington': washington,
            'nbaFont': nbaFont


        }).then(() => {
            this.setState({
                fontLoaded: true, // change to true
            });
        });
    }
    render() {
        const { fontLoaded } = this.state;
        // const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.eastContainer}>
                    <Text style={[styles.eastText, fontLoaded && { fontFamily:'nbaFont'}]}>EASTERN</Text>
                </View>
                {/* TEAMS */}
                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#CE2333"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'atlanta', color: "#FFFFFF"}]}>Atlanta</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#0E793F"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'boston', color: "#FFFFFF"}]}>Boston</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#2C2924"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'goldenState', color: "#FDFDFD"}]}>Brooklyn</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#1C1263"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'charlotte', color: "#268DA8"}]}>Charlotte</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#AB0C23"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'chicago', color: "black"}]}>Chicago</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#4D040D"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'cleveland', color: "#F8D539"}]}>Cleveland</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#EA2050"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'detroit', color: "#FFFFFF"}]}>Detroit</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#04234A"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'indiana', color: "#F7D24F"}]}>Indiana</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#950E30"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'miami', color: "#FCFEFC"}]}>Miami</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#0A4520"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'mil', color: "#DFD8BF"}]}>Milwaukee</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#2D426D"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'newyork', color: "#E1673B"}]}>New York</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#0D55CB"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily: 'orlando', color: "#FFFF"}]}>Orlando</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#EA1E52"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'philly', color: "#1F72AC"}]}>Philadelphia</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#C10933"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'toronto', color: "#040707"}]}>Toronto</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.teamBox, {backgroundColor: "#232742"}]}>
                    <Text style={[styles.teamText, fontLoaded && { fontFamily:'washington', color: "#DED0D8"}]}>Washington</Text>
                    <Text style={styles.scoreText}>0</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E69AA',
    },
    eastContainer: {
        backgroundColor: '#0E69AA',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#d6d7da'
    },
    eastText: {
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
        borderColor: '#d6d7da'
      },
    teamText: {
        fontWeight: 'bold',
        paddingLeft: 5,
        textAlign: 'auto',
        flex: 1,
        // color: 'black',
        fontSize: 18
      },
      scoreText: {
        paddingRight: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
      },
});