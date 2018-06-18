import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDSe2Q8UDVi7Q351KGmISBXn5DsE2AUvGE",
    authDomain: "tapjam-cbb5f.firebaseapp.com",
    databaseURL: "https://tapjam-cbb5f.firebaseio.com",
    projectId: "tapjam-cbb5f",
    storageBucket: "",
    messagingSenderId: "950975604208"
  };
  firebase.initializeApp(config);

const bg1 = require('../assets/images/bg1.jpg');

export default class Login extends React.Component {
    static navigationOptions = {
        header: null,
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user: '',
    //         loadingUser: true,
    //         loading: true
    //     }
    // }

    // componentDidMount() {
    //     this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
    //         this.setState({ 
    //             user: user, 
    //             loadingUser: false
    //         }, () => {
    //           if (this.state.user != null && this.state.user.isAnonymous == false)
    //             this.startApp();
    //         });
    //       });
    // }

    // skip = () => {
    //     this.setState({loading: true}, () => {
    //       if (this.state.user != null && this.state.user.isAnonymous == true)
    //         this.startApp();
    //       else {
    //         firebase.auth().signInAnonymouslyAndRetrieveData().then((result) => {
    //           this.setState({
    //               user: result.user
    //             }, () => {
    //             this.startApp()
    //           })
    //         })
    //         .catch(err => {
    //           this.setState({
    //               loading: false
    //             });
    //           alert(err)
    //         });
    //       }
    
    //     });
    //   }
    
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