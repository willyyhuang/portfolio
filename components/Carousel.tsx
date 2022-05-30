import {ReactNode} from 'react'
import styled from 'styled-components'

const CarouselContainer = styled.div<{height: string}>`
  scroll-snap-type: x mandatory;
  scroll-padding: 12px 12px;
  overflow-x: scroll;
  width: 30vw;
  height: ${(props) => props.height};
  display: inline-block;
  white-space: nowrap;
  overflow-y: hidden;
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
  height: string
  itemHeight: string
  itemRenderer: (item: T) => ReactNode
}

const Carousel = <T,>({items, height, itemRenderer, itemHeight}: CarouselPropType<T>) => (
  <CarouselContainer height={height}>
    {items.map((item, index) => (
      <CarouselItem key={`carousel-item-${index}`} height={itemHeight}>
        {itemRenderer(item)}
      </CarouselItem>
    ))}
  </CarouselContainer>
)

Carousel.displayName = 'Carousel'
export default Carousel
