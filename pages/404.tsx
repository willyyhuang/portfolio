import {Button, Grid, Typography} from '@mui/material'
import Link from 'next/link'

const FourOhFour = () => (
  <Grid container>
    <Grid container item xs={12} justifyContent='center'>
      <Typography variant='h3'>Page not found</Typography>
    </Grid>
    <Grid container item xs={12} justifyContent='center'>
      <Link href='/'>
        <Button>Return to Home</Button>
      </Link>
    </Grid>
  </Grid>
)

FourOhFour.displayName = 'FourOhFour'
export default FourOhFour
