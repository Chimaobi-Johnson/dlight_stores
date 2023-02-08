import React from "react"
import store from "../store"
import { Provider } from "react-redux";
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
             <Component {...pageProps} />
         </Provider>
  }
export default MyApp

// const MyApp = ({ Component, pageProps}) => (
//   <Component {...pageProps} />
// )

// export default wrapper.withRedux(MyApp);