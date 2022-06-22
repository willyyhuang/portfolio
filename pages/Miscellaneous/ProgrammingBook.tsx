import {gql} from '@apollo/client'
import Carousel from '@components/Carousel'
import ImageModal from '@components/ImageModal'
import RefreshIcon from '@mui/icons-material/Refresh'
import {
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material'
import useAnimeGirlProgrammingBook from '@utils/useAnimeGirlProgrammingBook'
import {client} from 'ApolloClient'
import {useState} from 'react'
import styled from 'styled-components'

const StyledSelect = styled(Select)`
  min-width: 300px;
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

const ProgrammingBook = ({animeGirlProgramming}: any) => {
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
    <ImageModal src={item} isExternal style={{width: '100%', height: '100%', objectFit: 'cover'}} />
  )

  return (
    <Grid container rowSpacing={4}>
      <Grid item container xs={12} justifyContent='center'>
        <Typography>Select a category!</Typography>
      </Grid>
      <Grid item xs={12} container justifyContent='center'>
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
        {!isCarousel && (
          <Tooltip title='click this to refresh image!'>
            <StyledIcon onClick={refreshImage} />
          </Tooltip>
        )}
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
      <Grid item container xs={12} justifyContent='center'>
        Click on the image to open a modal view
      </Grid>
      {isCarousel ? (
        <Grid item container xs={12} justifyContent='center'>
          <Carousel<string> items={currentFolderFiles} itemRenderer={handleItemRender} />
        </Grid>
      ) : (
        currentImage && (
          <Grid item container xs={12} justifyContent='center' sx={{cursor: 'pointer'}}>
            <ImageModal src={currentImage} isExternal style={{maxWidth: '60vw'}} />
          </Grid>
        )
      )}
    </Grid>
  )
}

ProgrammingBook.displayName = 'ProgrammingBook'
export default ProgrammingBook
