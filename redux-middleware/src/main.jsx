import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer, { rootSaga } from './modules/index.js';

import App from './App.jsx';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { createRoot } from 'react-dom/client';
import createSagaMiddleware from 'redux-saga';
import { thunk } from 'redux-thunk';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk, sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
