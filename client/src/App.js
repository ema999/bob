import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Index from './components/screens/index';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Index />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
