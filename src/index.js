import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme.js';
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux';
import store from "./store";
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/lib/integration/react';

export const MyContext = React.createContext({ appVersion: '0.9' });

ReactDOM.render(
  <React.StrictMode>
    <MyContext.Provider value={{ appVersion: '0.9' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PersistGate loading={null} persistor={persistStore(store)}>
          <Provider store={store}><App /></Provider>
        </PersistGate>
      </ThemeProvider>
    </MyContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
