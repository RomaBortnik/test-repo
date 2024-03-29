import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/test-repo">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
