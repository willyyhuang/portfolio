import ImageModal from '@components/ImageModal'
import {ImageList, ImageListItem} from '@mui/material'
import polaris1 from '@public/keyboards/Polaris1.webp'
import polaris2 from '@public/keyboards/Polaris2.webp'
import vega from '@public/keyboards/Vega.webp'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin: 0px auto;
`

const Keyboards = () => (
  <Container>
    <ImageList variant='masonry'>
      <ImageListItem>
        <ImageModal src={polaris1} />
      </ImageListItem>
      <ImageListItem>
        <ImageModal src={polaris2} />
      </ImageListItem>
      <ImageListItem>
        <ImageModal src={vega} />
      </ImageListItem>
    </ImageList>
  </Container>
)

Keyboards.displayName = 'Keyboards'
export default Keyboards
