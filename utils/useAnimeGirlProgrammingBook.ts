import {useEffect, useState} from 'react'

type FolderEntry = {
  folderName: string
  files: Array<string>
}

const rawImageUrlPrefix =
  'https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/'

const useAnimeGirlProgrammingBook = (animeGirlProgramming: any) => {
    const [selectedProgrammingLanguage, setSelectedProgrammingLanguage] = useState<any>('')
    const [currentImage, setCurrentImage] = useState<string>()
    const [currentFolderFiles, setCurrentFolderFiles] = useState<Array<string>>([])

    const formattedData = animeGirlProgramming?.repository?.object?.entries.map((folder: any) => {
      const {entries} = folder.object
      const files = entries ? entries.map((file: {path: string}) => rawImageUrlPrefix.concat(file.path)) : []
      return {
        folderName: folder.name,
        files,
      }
    })

    const entries = formattedData?.filter((folder: FolderEntry) => folder.files.length > 0)

    const refreshImage = () => {
        const directory = entries.find((entry: FolderEntry) => entry.folderName === selectedProgrammingLanguage)
        if (directory) {
            const {files} = directory
            setCurrentFolderFiles(files)
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
        currentFolderFiles,
    }
}

export default useAnimeGirlProgrammingBook
