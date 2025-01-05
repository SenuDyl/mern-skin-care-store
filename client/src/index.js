import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { configurationStore } from "@reduxjs/toolkit"; // A package that simplifies setting up Redux with the configureStore function.
// import { Provider } from "react-redux";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; //The default storage engine for redux-persist using the browser's local storage.
// import { PersistGate } from 'redux-persist/integration/react'; //A component that delays the rendering of your app until the persisted state has been retrieved and saved to Redux.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

