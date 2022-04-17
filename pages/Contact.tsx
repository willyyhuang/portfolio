import {Box, Button, Divider, Grid, Modal, Typography} from '@mui/material'
import {saveAs} from 'file-saver'
import {useState} from 'react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  color: #0096d6;
  text-transform: none;
  font-weight: 1000;
`

const StyledBox = styled(Box)`
  padding: 12px 12px 0px 12px;
  border: 0px solid;
  border-radius: 12px;
  margin-top: 1;
  background-color: #a3aaae;
  position: absolute;
  top: 30%;
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
                Contact me
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
              <Typography>wlsun</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Resume</Typography>
            </Grid>
            <Grid item xs={6}>
              <StyledButton onClick={() => setIsModalOpen(true)} sx={{padding: 0}}>
                Click me!
              </StyledButton>
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
                  This user would like to share the resume with you.
                </Typography>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={5}>
                <StyledButton fullWidth onClick={() => setIsModalOpen(false)}>
                  Decline
                </StyledButton>
              </Grid>
              <Divider
                orientation='vertical'
                flexItem
                sx={{borderRightWidth: 2, color: '#f6f3ed'}}
              />
              <Grid item xs={5}>
                <StyledButton
                  fullWidth
                  onClick={() => {
                    saveAs('/cv.pdf')
                    setIsModalOpen(false)
                  }}>
                  Accept
                </StyledButton>
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
