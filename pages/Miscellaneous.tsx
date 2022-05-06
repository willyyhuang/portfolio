import {gql} from '@apollo/client'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import RefreshIcon from '@mui/icons-material/Refresh'
import {Avatar, Button, Divider, Grid, MenuItem, Select, TextField, Typography} from '@mui/material'
import {password} from '@utils/constant'
import useAnimeGirlProgrammingBook from '@utils/useAnimeGirlProgrammingBook'
import Image from 'next/image'
import {getActivity} from 'pages/api/activity'
import {useState} from 'react'
import styled from 'styled-components'

import {client} from '../ApolloClient'

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

const StyledSelect = styled(Select)`
  width: 50%;
`

const StyledImg = styled.img`
  max-width: 60vw;
`

const StyledIcon = styled(RefreshIcon)`
  vertical-align: middle;
  margin: 6px;
  cursor: pointer;
`

export const getStaticProps = async () => {
  const {data} = await client.query({
    query: gql`
      query {
        repository(owner: "cat-milk", name: "Anime-Girls-Holding-Programming-Books") {
          name
          object(expression: "master:") {
            ... on Tree {
              entries {
                name
                object {
                  ... on Tree {
                    entries {
                      name
                      path
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      animeGirlProgramming: data,
    },
  }
}

const Miscellaneous = ({animeGirlProgramming}: any) => {
  const [value, setValue] = useState<string>()
  const [error, setError] = useState<boolean>(false)
  const [isValidated, setIsValidated] = useState<boolean>(false)
  const handleValidate = () => {
    if (value === password) {
      setIsValidated(true)
      setError(false)
    } else {
      setError(true)
    }
  }
  const [activity, setActivity] = useState<{activity: string; type: string}>()
  const {
    entries,
    selectedProgrammingLanguage,
    setSelectedProgrammingLanguage,
    refreshImage,
    currentImage,
  } = useAnimeGirlProgrammingBook(animeGirlProgramming)

  return (
    <Grid container rowSpacing={4}>
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
      <Grid item xs={12}>
        <Divider orientation='horizontal' />
      </Grid>
      <Grid item container xs={12} justifyContent='center'>
        <Button
          onClick={async () => {
            const data = await getActivity()
            setActivity(data)
          }}>
          Click for a random activity to do!
        </Button>
      </Grid>
      {activity && (
        <Grid item container xs={12} justifyContent='center'>
          <Typography>{activity.activity}</Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        <Divider orientation='horizontal' />
      </Grid>
      <Grid item container xs={12} justifyContent='center'>
        <Typography>Select your favorite programming language!</Typography>
      </Grid>
      <Grid item xs={8} container justifyContent='end'>
        <StyledSelect
          size='small'
          MenuProps={{
            sx: {
              maxHeight: 400,
            },
          }}
          value={selectedProgrammingLanguage}
          onChange={(e) => setSelectedProgrammingLanguage(e.target.value)}>
          {entries?.map((entry: any) => (
            <MenuItem
              key={entry.folderName}
              value={entry.folderName}>{`${entry.folderName} (${entry.files?.length})`}</MenuItem>
          ))}
        </StyledSelect>
      </Grid>
      <Grid item xs={4}>
        <StyledIcon onClick={refreshImage} />
      </Grid>
      {currentImage && (
        <Grid
          item
          container
          xs={12}
          justifyContent='center'
          onClick={refreshImage}
          sx={{cursor: 'pointer'}}>
          <StyledImg src={currentImage} />
        </Grid>
      )}
    </Grid>
  )
}

Miscellaneous.displayName = 'Miscellaneous'
export default Miscellaneous
