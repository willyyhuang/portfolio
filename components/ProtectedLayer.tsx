import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import {Avatar, Grid, TextField, Typography} from '@mui/material'
import Image from 'next/image'
import {useState} from 'react'
import styled from 'styled-components'

const BoxWrap = styled.div`
  width: 400px;
  height: 300px;
  margin: 15% auto 0;
  display: block;
  margin: auto;
  padding: 40px 40px 30px;
  background-color: #262626;
  border-radius: 10px;
  border: #fff 1px solid;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 20px;
`

const ProtectedLayer = () => {
  const [value, setValue] = useState<string>()
  const [error, setError] = useState<boolean>(false)
  const [isValidated, setIsValidated] = useState<boolean>(false)

  const handleValidate = () => {
    if (value === process.env.NEXT_PUBLIC_SECRET_PASSWORD) {
      setIsValidated(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <Grid item xs={12} container justifyContent='center'>
      {isValidated ? (
        <>
          <div className='video-responsive'>
            <iframe
              width='720'
              height='480'
              src='https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='Embedded youtube'
            />
          </div>
          <Grid item xs={12} container justifyContent='center'>
            <Typography>Congratulation on reaching here!</Typography>
          </Grid>
        </>
      ) : (
        <BoxWrap>
          <Grid container>
            <Grid item xs={12} container justifyContent='center' style={{marginBottom: 32}}>
              <Avatar>
                <Image src='/logo.png' width='50' height='50' />
              </Avatar>
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={error}
                helperText='hint: clipboard and convert hex to string'
                fullWidth
                variant='outlined'
                size='small'
                type='password'
                placeholder='Password'
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(ev) => {
                  if (ev.key === 'Enter') {
                    handleValidate()
                  }
                }}
                InputProps={{
                  endAdornment: (
                    <ArrowCircleRightOutlinedIcon
                      onClick={handleValidate}
                      style={{cursor: 'pointer'}}
                    />
                  ),
                }}
                sx={{color: 'black'}}
              />
            </Grid>
          </Grid>
        </BoxWrap>
      )}
    </Grid>
  )
}

ProtectedLayer.displayName = 'ProtectedLayer'
export default ProtectedLayer
