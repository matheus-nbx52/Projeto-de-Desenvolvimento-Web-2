import React from 'react'
import './App.css'
import Rotas from './routes'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/index';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />

        <Rotas />
      </PersistGate>

    </Provider>
  )
}