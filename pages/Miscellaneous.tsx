import {gql} from '@apollo/client'
import Carousel from '@components/Carousel'
import ProtectedLayer from '@components/ProtectedLayer'
import RefreshIcon from '@mui/icons-material/Refresh'
import {
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  Switch,
  Typography,
} from '@mui/material'
import useAnimeGirlProgrammingBook from '@utils/useAnimeGirlProgrammingBook'
import {useState} from 'react'
import styled from 'styled-components'

import {client} from '../ApolloClient'

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
  const [isCarousel, setIsCarousel] = useState<boolean>(true)

  const {
    entries,
    selectedProgrammingLanguage,
    setSelectedProgrammingLanguage,
    refreshImage,
    currentImage,
    currentFolderFiles,
  } = useAnimeGirlProgrammingBook(animeGirlProgramming)

  const handleItemRender = (item: string) => (
    <img src={item} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
  )

  return (
    <Grid container rowSpacing={4}>
      <ProtectedLayer />
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
        {!isCarousel && <StyledIcon onClick={refreshImage} />}
      </Grid>
      <Grid item container xs={12} justifyContent='center'>
        <FormGroup>
          <FormControlLabel
            label='Carousel'
            control={
              <Switch
                onChange={(e) => setIsCarousel(e.target.checked)}
                defaultChecked={isCarousel}
              />
            }
          />
        </FormGroup>
      </Grid>
      {isCarousel ? (
        <Grid item container xs={12} justifyContent='center'>
          <Carousel<string> items={currentFolderFiles} itemRenderer={handleItemRender} />
        </Grid>
      ) : (
        currentImage && (
          <Grid
            item
            container
            xs={12}
            justifyContent='center'
            onClick={refreshImage}
            sx={{cursor: 'pointer'}}>
            <StyledImg src={currentImage} />
          </Grid>
        )
      )}
    </Grid>
  )
}

Miscellaneous.displayName = 'Miscellaneous'
export default Miscellaneous
