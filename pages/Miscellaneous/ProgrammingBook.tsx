import {gql} from '@apollo/client'
import Carousel from '@components/Carousel'
import RefreshIcon from '@mui/icons-material/Refresh'
import {
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Modal,
  Select,
  Switch,
  Typography,
} from '@mui/material'
import useAnimeGirlProgrammingBook from '@utils/useAnimeGirlProgrammingBook'
import {useState} from 'react'
import styled from 'styled-components'

import {client} from '../../ApolloClient'

const StyledSelect = styled(Select)`
  min-width: 300px;
`

const StyledImg = styled.img`
  max-width: 60vw;
`

const StyledIcon = styled(RefreshIcon)`
  vertical-align: middle;
  margin: 6px;
  cursor: pointer;
`

const ModalContainer = styled.div`
  position: absolute;
  max-width: 50vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false)
  const [modalImageSrc, setModalImageSrc] = useState<string>()

  const {
    entries,
    selectedProgrammingLanguage,
    setSelectedProgrammingLanguage,
    refreshImage,
    currentImage,
    currentFolderFiles,
  } = useAnimeGirlProgrammingBook(animeGirlProgramming)

  const handleItemRender = (item: string) => (
    <div
      onClick={() => {
        setIsImageModalOpen(true)
        setModalImageSrc(item)
      }}>
      <img src={item} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
    </div>
  )

  return (
    <Grid container rowSpacing={4}>
      <Modal open={isImageModalOpen} onClose={() => setIsImageModalOpen(false)}>
        <ModalContainer>
          <img src={modalImageSrc} style={{width: '100%'}} />
        </ModalContainer>
      </Modal>
      <Grid item container xs={12} justifyContent='center'>
        <Typography>Select your favorite programming language!</Typography>
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
            <StyledImg
              src={currentImage}
              onClick={() => {
                setIsImageModalOpen(true)
                setModalImageSrc(currentImage)
              }}
            />
          </Grid>
        )
      )}
    </Grid>
  )
}

ProgrammingBook.displayName = 'ProgrammingBook'
export default ProgrammingBook
