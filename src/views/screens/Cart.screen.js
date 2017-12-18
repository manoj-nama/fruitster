import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Constants } from 'expo';
import { connect } from 'react-redux';

import styles from '../../styles';

class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Cart</Text>
      </View>
    );
  }
}

const mapStateToProps = state => state;
const CartContainer = connect(mapStateToProps)(Cart);

export default CartContainer;