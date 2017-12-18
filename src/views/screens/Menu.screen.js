import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Menu</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => state;
const MenuContainer = connect(mapStateToProps)(Menu);

export default MenuContainer;