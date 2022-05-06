import {useEffect, useState} from 'react'

const rawImageUrlPrefix =
  'https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/'

const useAnimeGirlProgrammingBook = (animeGirlProgramming: any) => {
    const [selectedProgrammingLanguage, setSelectedProgrammingLanguage] = useState<any>()
    const [currentImage, setCurrentImage] = useState<string>()

    const entries = animeGirlProgramming?.repository?.object?.entries.map((folder: any) => {
      const files = folder.object.entries?.map((file: any) => rawImageUrlPrefix.concat(file.path))
      return {
        folderName: folder.name,
        files,
      }
    })
    const refreshImage = () => {
        const directory = entries.find((entry: any) => entry.folderName === selectedProgrammingLanguage)
        if (directory) {
            const {files} = directory
            setCurrentImage(files[Math.floor(Math.random() * files.length)])
        }
    }

    useEffect(() => {
        if (selectedProgrammingLanguage) {
            refreshImage()
        }
    }, [selectedProgrammingLanguage])


    return {
        entries,
        selectedProgrammingLanguage,
        setSelectedProgrammingLanguage,
        refreshImage,
        currentImage,
    }
}

export default useAnimeGirlProgrammingBook
