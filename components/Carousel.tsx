import {ReactNode, useEffect, useRef} from 'react'
import {useDrag} from 'react-use-gesture'
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
  cursor: grab;
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
  width: 50%;
  vertical-align: middle;

  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`

type CarouselPropType<T> = {
  items: Array<T>
  containerHeight?: string
  itemHeight?: string
  itemRenderer: (item: T) => ReactNode
}

const Carousel = <T,>({items, containerHeight, itemRenderer, itemHeight}: CarouselPropType<T>) => {
  const ref = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  const handleScroll = (position?: 'left' | 'right' | 'middle', pixels?: number) => {
    let movePixel: number
    if (pixels) {
      movePixel = -pixels * 2
    } else {
      switch (position) {
        case 'left':
          movePixel = -(itemRef?.current?.clientWidth || 0)
          break
        case 'right':
          movePixel = itemRef?.current?.clientWidth || 0
          break
        case 'middle':
        default:
          movePixel = (itemRef?.current?.clientWidth || 0) * (items.length / 2)
      }
    }
    if (ref?.current) {
      ref?.current?.scrollTo({
        left: (ref?.current?.scrollLeft || 0) + movePixel,
        behavior: 'smooth',
      })
    }
  }

  const bind = useDrag(({down, movement: [mx]}) => {
    if (down && mx !== 0) {
      handleScroll(undefined, mx)
    }
  })

  useEffect(() => {
    handleScroll('middle')
  }, [])

  if (items.length === 0) return null

  return (
    <CarouselContainer height={containerHeight} id='scroll-container' {...bind()} ref={ref}>
      {items.map((item, index) => (
        <CarouselItem
          key={`carousel-item-${index}`}
          height={itemHeight}
          ref={index === 0 ? itemRef : null}>
          {itemRenderer(item)}
        </CarouselItem>
      ))}
    </CarouselContainer>
  )
}

Carousel.displayName = 'Carousel'
export default Carousel
