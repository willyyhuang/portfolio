import '../styles/globals.css'

import {createTheme, ThemeProvider} from '@mui/material'
import {AppProps} from 'next/app'

import Layout from '../components/Layout'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      dark: '#ffffff',
    },
    mode: 'dark',
  },
})
const MyApp = ({Component, pageProps}: AppProps) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)

MyApp.displayName = 'MyApp'
export default MyApp
