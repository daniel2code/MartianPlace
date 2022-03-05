
import React from 'react';

import Layout from '../components/Layout'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Web3ReactProvider } from '@web3-react/core';

import { store } from '../store/store'
import { Provider } from "react-redux"
import Web3 from 'web3';

function getLibrary(provider) {
  return new Web3(provider)
}

function MyApp({ Component, pageProps }) {

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    </Web3ReactProvider>
  )
}

export default MyApp
