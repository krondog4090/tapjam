import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PropTypes } from 'prop-types';

const width = Dimensions.get('window').width; //full width
const widthHalf = Dimensions.get('window').width/2;//half width

class Score extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <View style={[styles.scoreContainer, {
          bottom: this.props.y,
        }]}>
        <View style={styles.textContainer}>
          <Text style={styles.scoreText}>{this.props.highScore}</Text>
          <Text style={styles.scoreText}>{this.props.score}</Text>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center'
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center', 
    width: width
  },
  scoreContainer: {
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderRadius: 2,
    backgroundColor: "#e4e4e4",
    width: widthHalf
  },
  scoreText: {
    fontSize: 25,
    fontWeight: '300',
    color: 'black',
  },
  countryText: {
    fontSize: 32,
    color: 'black'

  }
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
