import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/app/store.ts';
import Layout from '../components/layout';
import GlobalStyle from '../globalStyle';
import '../globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
