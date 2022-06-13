import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import {Grid, IconButton} from '@mui/material'
import useViewport from '@utils/useViewport'
import {ReactNode, useRef} from 'react'
import styled from 'styled-components'

const CarouselContainer = styled.div<{height?: string}>`
  scroll-snap-type: x mandatory;
  scroll-padding: 0px;
  overflow-x: scroll;
  width: 100%;
  height: ${(props) => props.height};
  display: inline-block;
  white-space: nowrap;
  overflow-y: hidden;
  text-align: center;
  ::-webkit-scrollbar {
    width: 2px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
  @media only screen and (max-width: 400px) {
    height: 100%;
    width: 100%;
    ::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
`

const CarouselItem = styled.div<{height?: string}>`
  scroll-snap-align: center;
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
  padding: 12px;
  height: ${(props) => props.height};
  display: inline-block;
  vertical-align: middle;
  width: 50%;
`

type CarouselPropType<T> = {
  items: T[]
  containerHeight?: string
  itemHeight?: string
  itemRenderer: (item: T) => ReactNode
}

const Carousel = <T,>({items, containerHeight, itemRenderer, itemHeight}: CarouselPropType<T>) => {
  const ref = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)
  const {width} = useViewport()

  const isCompact = width && width < 600

  const handleScroll = (position: 'left' | 'right' | 'middle') => {
    let movePixel
    switch (position) {
      case 'left':
        movePixel = -(itemRef?.current?.clientWidth || 0)
        break
      case 'right':
        movePixel = itemRef?.current?.clientWidth || 0
        break
      case 'middle':
      default:
        movePixel = (itemRef?.current?.clientWidth || 0) * 4
    }
    if (ref?.current) {
      ref?.current?.scrollTo({
        left: (ref?.current?.scrollLeft || 0) + movePixel,
        behavior: 'smooth',
      })
    }
  }

  if (items.length === 0) return null
  const showArrow = !isCompact && items.length > 1

  return (
    <Grid container>
      {showArrow && (
        <Grid item xs={1} style={{alignSelf: 'center'}}>
          <IconButton onClick={() => handleScroll('left')}>
            <ArrowLeftIcon />
          </IconButton>
        </Grid>
      )}
      <Grid item xs={showArrow ? 10 : 12}>
        <CarouselContainer height={containerHeight} id='scroll-container' ref={ref}>
          {items.map((item, index) => (
            <CarouselItem
              key={`carousel-item-${index}`}
              height={itemHeight}
              ref={index === 0 ? itemRef : null}>
              {itemRenderer(item)}
            </CarouselItem>
          ))}
        </CarouselContainer>
      </Grid>
      {showArrow && (
        <Grid item xs={1} style={{alignSelf: 'center'}}>
          <IconButton onClick={() => handleScroll('right')}>
            <ArrowRightIcon />
          </IconButton>
        </Grid>
      )}
    </Grid>
  )
}

Carousel.displayName = 'Carousel'
export default Carousel
