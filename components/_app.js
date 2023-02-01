import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import React from 'react';


class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    
        console.log(appProps);
        return {
            appProps: appProps
        }
    }

    render() {

    }
}