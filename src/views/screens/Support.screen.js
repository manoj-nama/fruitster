import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Constants } from 'expo';
import { connect } from 'react-redux';

import styles from '../../styles';

class Support extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Support</Text>
      </View>
    );
  }
}

const mapStateToProps = state => state;
const SupportContainer = connect(mapStateToProps)(Support);

export default SupportContainer;