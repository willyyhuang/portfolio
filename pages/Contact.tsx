import {Box, Button, Divider, Grid, Link as MuiLink, Modal, Typography} from '@mui/material'
import {saveAs} from 'file-saver'
import Link from 'next/link'
import {useState} from 'react'
import styled from 'styled-components'

const StyledBox = styled(Box)`
  width: 400px;
  padding: 12px 12px 0px 12px;
  border: 0px solid;
  border-radius: 12px;
  margin-top: 1;
  background-color: #a3aaae;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledContactBox = styled(Box)`
  padding: 2rem 2rem;
  border: 3px solid;
  border-radius: 13px;
`

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      <Grid container justifyContent='center' item xs={12}>
        <StyledContactBox>
          <Grid container>
            <Grid container justifyContent='center' item xs={12} style={{marginBottom: 12}}>
              <Typography style={{fontWeight: 600}} variant='h4'>
                Contact
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Email</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>wh@pewf.dev</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>LinkedIn</Typography>
            </Grid>
            <Grid item xs={6}>
              <MuiLink
                href='https://www.linkedin.com/in/wlsun/'
                target='_blank'
                style={{color: '#0096d6', textDecoration: 'none'}}>
                wlsun
              </MuiLink>
            </Grid>
            <Grid item xs={6}>
              <Typography>Resume</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                style={{cursor: 'pointer', color: '#0096d6'}}
                onClick={() => setIsModalOpen(true)}>
                Download
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Other links</Typography>
            </Grid>
            <Grid item xs={6}>
              <Link href='/Links'>My links</Link>
            </Grid>
          </Grid>
        </StyledContactBox>
      </Grid>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Grid container justifyContent='center' item xs={12}>
          <StyledBox>
            <Grid container>
              <Grid container justifyContent='center' item xs={12}>
                <Typography color='black' sx={{fontWeight: 1000, fontSize: '120%'}}>
                  AirDrop
                </Typography>
              </Grid>
              <Grid container justifyContent='center' item xs={12}>
                <Typography color='black'>
                  &quot;Wilson&quot; would like to share a resume.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider
                  orientation='horizontal'
                  flexItem
                  sx={{borderBottomWidth: 1, marginTop: 1}}
                />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={5}>
                <Button
                  sx={{textTransform: 'none', fontWeight: 1000}}
                  color='info'
                  fullWidth
                  onClick={() => setIsModalOpen(false)}>
                  Decline
                </Button>
              </Grid>
              <Divider orientation='vertical' flexItem sx={{borderRightWidth: 1}} />
              <Grid item xs={5}>
                <Button
                  sx={{textTransform: 'none', fontWeight: 1000}}
                  fullWidth
                  color='info'
                  onClick={() => {
                    saveAs('/cv.pdf')
                    setIsModalOpen(false)
                  }}>
                  Accept
                </Button>
              </Grid>
            </Grid>
          </StyledBox>
        </Grid>
      </Modal>
    </>
  )
}

Contact.displayName = 'Contact'
export default Contact
