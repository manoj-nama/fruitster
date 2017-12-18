import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import styles from '../../styles';

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Menu</Text>
      </View>
    );
  }
}

const mapStateToProps = state => state;
const MenuContainer = connect(mapStateToProps)(Menu);

export default MenuContainer;