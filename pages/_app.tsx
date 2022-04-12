import '@styles/globals.css'

import Layout from '@components/Layout'
import {CacheProvider} from '@emotion/react'
import {ThemeProvider} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import createEmotionCache from '@styles/createEmotionCache'
import theme from '@styles/theme'
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
      <title>pewf</title>
      <meta charSet='UTF-8' />
      <meta
        name='keywords'
        content='wilson, front, end, developer, reactjs, react, javascript, typescript, nextjs'
      />
      <meta name='author' content='Wilson Huang' />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </CacheProvider>
)

MyApp.displayName = 'MyApp'
export default MyApp
