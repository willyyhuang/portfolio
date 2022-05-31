import {useEffect,useState} from 'react'

const useViewport = () => {
    const [width, setWidth] = useState<number>()
    const [height, setHeight] = useState<number>()

    const handleResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return {
        width,
        height,
    }
}

export default useViewport