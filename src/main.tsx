import React from 'react';
import { Provider } from 'react-redux';
import { createCtx } from '@reatom/framework';
import { reatomContext } from '@reatom/npm-react';
import ReactDOM from 'react-dom/client';
import { store } from './redux-state';
import App from './App.tsx';

import './index.css';

const ctx = createCtx();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <reatomContext.Provider value={ctx}>
      <Provider store={store}>
        <App />
      </Provider>
    </reatomContext.Provider>
  </React.StrictMode>,
);
