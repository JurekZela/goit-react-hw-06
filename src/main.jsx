import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import App from './components/App/App.jsx';
import GlobalStyles  from './GlobalStyled-styled.js';
import { store, persisterStore } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persisterStore}>
    <App />
    </PersistGate>
    </Provider>
    <GlobalStyles />
  </React.StrictMode>,
)