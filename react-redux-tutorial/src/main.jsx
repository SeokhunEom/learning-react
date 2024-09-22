import App from './App.jsx';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './modules/index.js';

const store = createStore(rootReducer, composeWithDevTools());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
