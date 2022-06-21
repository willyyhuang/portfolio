import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  list-style-position: inside;
`

const Description = styled.p`
  margin-left: 1em;
  display: inline;
`

const Miscellaneous = () => (
  <Container>
    <div>Here are some small projects I have coded</div>
    <ul>
      <li>
        <Link href='/Miscellaneous/ProgrammingBook'>Anime girl programming books</Link>
        <Description>
          Display images from this{' '}
          <a
            href='https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books'
            target='_blank'
            rel='noreferrer'>
            repository
          </a>
        </Description>
      </li>
      <li>
        <Link href='/Miscellaneous/Secret'>Secret</Link>
        <Description>This website&apos;s easter egg</Description>
      </li>
    </ul>
  </Container>
)

Miscellaneous.displayName = 'Miscellaneous'
export default Miscellaneous
