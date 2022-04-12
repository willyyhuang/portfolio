import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import {Avatar, Grid, TextField} from '@mui/material'
import {useState} from 'react'
import styled from 'styled-components'

import {password} from '../utils/constant'

const BoxWrap = styled.div`
  width: 300px;
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

const Miscellaneous = () => {
  const [value, setValue] = useState<string>()
  const [isValidated, setIsValidated] = useState<boolean>(false)
  const handleValidate = () => {
    if (value === password) setIsValidated(true)
  }

  return isValidated ? (
    <div />
  ) : (
    <BoxWrap>
      <Grid container>
        <Grid item xs={12} container justifyContent='center' style={{marginBottom: 32}}>
          <Avatar />
        </Grid>
        <Grid item xs={12}>
          <TextField
            helperText='hint: convert hex to string'
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
  )
}

Miscellaneous.displayName = 'Miscellaneous'
export default Miscellaneous
