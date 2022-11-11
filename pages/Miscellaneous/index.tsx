import {Typography} from '@mui/material'
import Link from 'next/link'
import {ReactNode} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  list-style-position: inside;
`

const Description = styled.p`
  margin-left: 0.5em;
  display: inline;
`

type SubListItemData = {
  href: string
  title: string
  description: ReactNode | string
}

type ItemData = {
  title: string
  listItems: Array<SubListItemData>
}

const Miscellaneous = () => {
  const ITEMS: Array<ItemData> = [
    {
      title: 'Small coding projects',
      listItems: [
        {
          href: '/Miscellaneous/ProgrammingBook',
          title: 'Anime girl programming books',
          description: (
            <Typography>
              Display anime girl holding programming books images from this{' '}
              <a
                href='https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books'
                target='_blank'
                rel='noreferrer'>
                repository
              </a>
            </Typography>
          ),
        },
        {
          href: '/Miscellaneous/Secret',
          title: 'Secret',
          description: 'Website easter egg',
        },
      ],
    },
    {
      title: 'Hobby logs',
      listItems: [
        {
          href: '/Miscellaneous/Keyboards',
          title: 'Keyboards',
          description: 'My custom keyboards',
        },
      ],
    },
  ]
  return (
    <Container>
      {ITEMS.map((item) => (
        <>
          <Typography variant='h5'>{item.title}</Typography>
          <ul>
            {item.listItems.map((listItem) => (
              <li>
                <Link href={listItem.href}>{listItem.title}</Link>
                <Description>{listItem.description}</Description>
              </li>
            ))}
          </ul>
        </>
      ))}
    </Container>
  )
}

Miscellaneous.displayName = 'Miscellaneous'
export default Miscellaneous
