import {Box, Grid, Typography} from '@mui/material'

const Contact = () => (
  <Box sx={{padding: '5rem 2rem', border: '7px solid'}}>
    <Grid container>
      <Grid container justifyContent='center' item xs={12}>
        <Typography style={{fontWeight: 600}}>Contact me</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Email</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>wh.dev@icloud.com</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>LinkedIn</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>wlsun</Typography>
      </Grid>
    </Grid>
  </Box>
)

Contact.displayName = 'Contact'
export default Contact
