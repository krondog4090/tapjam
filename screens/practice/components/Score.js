import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PropTypes } from 'prop-types';

class Score extends Component {
  render() {
    return (
      <View style={[styles.scoreContainer, {
        bottom: this.props.y,
        width: Dimensions.get('window').width,
      }]}>
        <Text style={styles.scoreText}>
          {this.props.score}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scoreContainer: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scoreText: {
    flex: 1,
    fontSize: 120,
    fontWeight: '100',
    color: 'white',
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
