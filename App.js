import React from 'react';
import { Provider } from 'react-redux';
import { Font } from 'expo';

import store from './src/store';
import RootNavigator from './src/navigator';

export default class App extends React.Component {
  state = {
    fontsLoaded: false
  }

  async componentWillMount() {
    await Font.loadAsync({
      'amarnath': require('./assets/fonts/Amaranth-Regular.ttf'),
      'amarnath-bold': require('./assets/fonts/Amaranth-Bold.ttf'),
      'amarnath-italic': require('./assets/fonts/Amaranth-Italic.ttf')
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
