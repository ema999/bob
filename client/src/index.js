import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import bobApp from './reducers'


let initialState = {
  users:{
    form: {}
  }
}
__INIT(initialState);


function __INIT(initialState) {
  let store = createStore(bobApp, initialState)

  ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));
  //registerServiceWorker();
}
