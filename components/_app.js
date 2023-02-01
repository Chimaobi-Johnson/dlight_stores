import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import React from 'react';


class MyApp extends App {
    static async getInitialProps({ component, ctx }) {
        // const appProps
    }
}