import {gql, useQuery} from '@apollo/client'
import {useEffect, useState} from 'react'

const rawImageUrlPrefix = 'https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/'

const useAnimeGirlProgrammingBook = () => {
    const TEST_GITHUB_API = gql`
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
    `

    const {data} = useQuery(TEST_GITHUB_API)
    const [entries, setEntries] = useState<Array<{folderName: string, files: Array<string>}>>([])
    const [selectedProgrammingLanguage, setSelectedProgrammingLanguage] = useState<any>()
    const [currentImage, setCurrentImage] = useState<string>()

    const refreshImage = () => {
        const directory = entries.find((entry) => entry.folderName === selectedProgrammingLanguage)
        if (directory) {
            const {files} = directory
            setCurrentImage(files[Math.floor(Math.random() * files.length)])
        }
    }

    useEffect(() => {
        if (data) {
            const formattedData = data.repository.object.entries.map((folder: any) => {
                const files = folder.object.entries?.map((file: any) => rawImageUrlPrefix.concat(file.path))
                return {
                    folderName: folder.name,
                    files,
                }
            })
            setEntries(formattedData)
        }
    }, [data])

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
