import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  PropTypes,
} from 'prop-types';

class Floor extends Component {
  render() {
    return (
      <View style={[styles.floorContainer, {height: this.props.height}]} />
    );
  }
}

const styles = StyleSheet.create({
  floorContainer: {
    backgroundColor: "rgba(46,46,48,.9)",
    position: 'absolute',
    width: Dimensions.get('window').width,
    bottom: 0,
  },
});

Floor.defaultProps = {
  height: 20,
};

Floor.propTypes = {
  height: PropTypes.number,
};

export default Floor;
