import '@styles/globals.css'

import {ApolloProvider} from '@apollo/client'
import Layout from '@components/Layout'
import {CacheProvider} from '@emotion/react'
import {GlobalStyles, ThemeProvider} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import createEmotionCache from '@styles/createEmotionCache'
import theme from '@styles/theme'
import {client} from 'ApolloClient'
import {AppProps} from 'next/app'
import Head from 'next/head'

const clientSideEmotionCache = createEmotionCache()
const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & {emotionCache: typeof clientSideEmotionCache}) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <link rel='manifest' href='/manifest.json' />
      <link rel='apple-touch-icon' href='/logo.png' />
      <title>Wilson Huang</title>
      <meta charSet='UTF-8' />
      <meta
        name='keywords'
        content='wilson, front, end, developer, reactjs, react, javascript, typescript, nextjs'
      />
      <meta name='author' content='Wilson Huang' />
    </Head>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            '*::-webkit-scrollbar': {
              width: '0.4em',
              height: '0.4em',
            },
            '*::-webkit-scrollbar-thumb': {
              backgroundColor: '#babac0',
              borderRadius: 16,
            },
            '*::-webkit-scrollbar-button': {
              display: 'none',
            },
          }}
        />
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  </CacheProvider>
)

MyApp.displayName = 'MyApp'
export default MyApp
