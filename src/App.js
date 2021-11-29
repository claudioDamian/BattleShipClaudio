import React from 'react';
import store from './store';
import { Provider } from 'react-redux'
import './App.css';
import PlayScreen from './components/organisms/PlayScreen/PlayScreen.component';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PlayScreen />
      </Provider>
    </div>
  );
}

export default App;
