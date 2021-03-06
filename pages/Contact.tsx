import {Box, Button, Divider, Grid, Link as MuiLink, Modal, Typography} from '@mui/material'
import osmoPic from '@public/osmo.png'
import Image from 'next/image'
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
`

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      <Grid container justifyContent='center' item xs={12}>
        <StyledContactBox>
          <Grid container spacing={1}>
            <Grid container justifyContent='center' item xs={12} style={{marginBottom: 12}}>
              <Typography style={{fontWeight: 600}} variant='h4'>
                Contact
              </Typography>
            </Grid>
            <Grid item xs={6} container justifyContent='end'>
              <Typography>Email</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>wh@pewf.dev</Typography>
            </Grid>
            <Grid item xs={6} container justifyContent='end'>
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
            <Grid item xs={6} container justifyContent='end'>
              <Typography>Resume</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                style={{cursor: 'pointer', color: '#0096d6'}}
                onClick={() => setIsModalOpen(true)}>
                Download
              </Typography>
            </Grid>
            <Grid item xs={6} container justifyContent='end'>
              <Typography>Other links</Typography>
            </Grid>
            <Grid item xs={6}>
              <Link href='/Links'>My links</Link>
            </Grid>
            <Grid container justifyContent='center' style={{marginTop: 16}} item xs={12}>
              <Image src={osmoPic} style={{borderRadius: 16}} />
            </Grid>
            <Grid item xs={12} container justifyContent='center' style={{marginTop: 32}}>
              <Typography variant='h5'>Commissions</Typography>
            </Grid>
            <Grid item xs={12} container justifyContent='center'>
              <div>
                I am opened to do freelance projects, here are some services I can provide:
                <ul>
                  <li>Static website building</li>
                  <li>Computer assembling</li>
                  <li>Keyboard building</li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} container justifyContent='center'>
              Please reach out to me via email if you are interested in any of the services I
              provide.
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
                    window.open('/cv.pdf', '_blank')
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
