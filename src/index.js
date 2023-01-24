import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react"
import {Provider} from "react-redux"
import storeReducer from './state/store';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    data: storeReducer
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);


