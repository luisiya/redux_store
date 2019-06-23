import { Provider } from 'react-redux';
import React from 'react';
import Tasks from './components/Tasks';
import './App.css';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
