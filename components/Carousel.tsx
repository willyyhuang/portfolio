import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import {IconButton} from '@mui/material'
import useViewport from '@utils/useViewport'
import {ReactNode, useRef} from 'react'
import styled from 'styled-components'

const CarouselContainer = styled.div<{height: string}>`
  scroll-snap-type: x mandatory;
  scroll-padding: 0px;
  overflow-x: scroll;
  width: 30vw;
  height: ${(props) => props.height};
  display: inline-block;
  white-space: nowrap;
  overflow-y: hidden;
  text-align: center;
  ::-webkit-scrollbar {
    background-color: #0b1622;
    width: 2px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #0b1622;
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
    width: 100vw;
  }
`

const CarouselItem = styled.div<{height: string}>`
  scroll-snap-align: start;
  @media only screen and (max-width: 400px) {
    width: 80vw;
    height: 100%;
  }
  padding: 12px;
  width: 30vw;
  height: ${(props) => props.height};
  display: inline-block;
`

type CarouselPropType<T> = {
  items: T[]
  containerHeight: string
  itemHeight: string
  itemRenderer: (item: T) => ReactNode
}

const Carousel = <T,>({items, containerHeight, itemRenderer, itemHeight}: CarouselPropType<T>) => {
  const ref = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)
  const {width} = useViewport()

  const isCompact = width && width < 600

  const handleScroll = (position: 'left' | 'right') => {
    const movePixel =
      position === 'left'
        ? -(itemRef?.current?.clientWidth || 0)
        : itemRef?.current?.clientWidth || 0
    if (ref?.current) {
      ref?.current?.scrollTo({
        left: (ref?.current?.scrollLeft || 0) + movePixel,
        behavior: 'smooth',
      })
    }
  }

  if (items.length === 0) return null

  return (
    <>
      {!isCompact && (
        <IconButton onClick={() => handleScroll('left')}>
          <ArrowLeftIcon />
        </IconButton>
      )}
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
      {!isCompact && (
        <IconButton onClick={() => handleScroll('right')}>
          <ArrowRightIcon />
        </IconButton>
      )}
    </>
  )
}

Carousel.displayName = 'Carousel'
export default Carousel
