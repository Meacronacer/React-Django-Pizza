import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/app/app';
import store, { persistor } from './components/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App/>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

