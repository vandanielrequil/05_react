import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme.js';
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux';
import store from "./store";

export const MyContext = React.createContext({ appVersion: '0.2' });

ReactDOM.render(
  <React.StrictMode>
    <MyContext.Provider value={{ appVersion: '0.9' }}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Provider store={store}><App /></Provider>
        </React.Fragment>
      </ThemeProvider>
    </MyContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
