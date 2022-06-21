import {createTheme} from '@mui/material'

const theme = createTheme({
    typography: {
      fontFamily: [
        'Anek Tamil',
        'sans-serif'
      ].join(',')
    },
    palette: {
      background: {
        default: '#0B1622',
      },
      primary: {
        main: '#ffffff',
        dark: '#ffffff',
      },
      info: {
        main: '#0096d6',
        dark: '#0096d6',
      },
      mode: 'dark',
    },
  })

  export default theme