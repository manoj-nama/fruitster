import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store';
import Root from './src/views/Root';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
