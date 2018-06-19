import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PropTypes } from 'prop-types';
import { Font } from 'expo';

const width = Dimensions.get('window').width; //full width
const widthHalf = Dimensions.get('window').width/1.5;//half width
const widthHalfTwo = Dimensions.get('window').width/2;

class Score extends Component {
  constructor(props) {
    super(props);
    this.state= {
      fontLoaded: false
    }
  }

  componentDidMount() {
    Font.loadAsync({
      'font': this.props.font,
    }).then(() => {
      this.setState({
        fontLoaded: true,
      });
    });

  }

  render() {
    const { fontLoaded } = this.state;
    return (
      <View style={styles.pageContainer}>
        <View style={[styles.scoreContainer, {
          bottom: this.props.y
        }]}>
        <View style={styles.textContainer}>
          <View style={styles.insideContainer}>
            <Text style={[styles.teamScoreText, , fontLoaded && { fontFamily: 'font' }]}>{this.props.teamScore}</Text>
            <Text style={[styles.scoreBoardText, fontLoaded && { fontFamily: 'font' }]}>Total</Text>
            <Text style={[styles.scoreText, , fontLoaded && { fontFamily: 'font' }]}>{this.props.totalPoints}</Text>
            <Text style={[styles.scoreBoardText, fontLoaded && { fontFamily: 'font' }]}>Best</Text>
            <Text style={[styles.scoreText, , fontLoaded && { fontFamily: 'font' }]}>{this.props.highScore}</Text>
            <Text style={[styles.scoreBoardText, fontLoaded && { fontFamily: 'font' }]}>Score</Text>
            <Text style={[styles.scoreTextPersonal, , fontLoaded && { fontFamily: 'font' }]}>{this.props.score}</Text>
          </View>
          {/* <View style={styles.insideContainer}>
          </View> */}
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  teamScoreText: {
    fontSize: 24,
    // color: '#d6d7da',
    padding: 5
  },
  scoreBoardText: {
    fontSize: 26,
    padding: 5
  },
  textContainer: {
    flex: 1,
    alignItems: 'center'
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center', 
  },
  scoreContainer: {
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderRadius: 2,
    backgroundColor: "#969291",
    borderWidth: 4,
    borderColor: '#d6d7da',
    width: widthHalfTwo
  },
  insideContainer: {
    padding: 5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  scoreText: {
    fontSize: 25,
    fontWeight: '300',
    color: 'black',
  },
  scoreTextPersonal: {
    fontSize: 25,
    fontWeight: '300',
    color: '#d6d7da',
  },
});

Score.defaultProps = {
  y: 0,
  scored: null,
  score: 0,
};

Score.propTypes = {
  y: PropTypes.number,
  scored: PropTypes.bool,
  score: PropTypes.number,
};

export default Score;