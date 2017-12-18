import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import styles from '../../styles';

class User extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>User</Text>
      </View>
    );
  }
}

const mapStateToProps = state => state;
const UserContainer = connect(mapStateToProps)(User);

export default UserContainer;