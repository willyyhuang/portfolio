import {useEffect,useState} from 'react'

const useViewport = () => {
    const [width, setWidth] = useState<number>(window.innerWidth)
    const [height, setHeight] = useState<number>(window.innerHeight)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        })
    }, [])

    return {
        width,
        height,
    }
}

export default useViewport