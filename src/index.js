import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { getAxiosInstance } from './services/api';
import rootReducer from './store/root-reducer';
import { fetchEventsList } from './store/api-actions';

const api = getAxiosInstance();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    })
});

setInterval(() => store.dispatch(fetchEventsList()), 3 * 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
