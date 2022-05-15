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
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            '::-webkit-scrollbar': {
              backgroundColor: '#0B1622',
              width: 8,
            },
            '::-webkit-scrollbar-track': {
              backgroundColor: '#0B1622',
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: '#babac0',
              borderRadius: 16
            },
            '::-webkit-scrollbar-button': {
              display: 'none'
            }
          }
        },
      },
    }
  })

  export default theme