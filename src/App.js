import React from 'react';
import RootMain from './Components/RootMain';
import { Provider } from 'react-redux';
import { store } from './Components/Store/store';

export default function App() {
  return (
    <Provider store={store}>
      <RootMain />
    </Provider>
  )
}

