import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore} from "redux";
import { Provider } from "react-redux";
import userReducer from "./reducers/userReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'

//config redux persist
const persistConfig = {
  key: 'userInfo',
  storage: storage,
  //whitelist: ['authType'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, userReducer);
let store = createStore(
  pReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* template */}
      <App />
      </PersistGate> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
