import '../styles/globals.css'

import {AppProps} from 'next/app'

const MyApp = ({Component, pageProps}: AppProps) => <Component {...pageProps} />

MyApp.displayName = 'MyApp'
export default MyApp
