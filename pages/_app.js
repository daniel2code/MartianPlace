
import React from 'react';

import Layout from '../components/Layout'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import { store } from '../store/store'
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
