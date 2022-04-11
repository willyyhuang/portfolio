import {Button, Grid} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import {ReactNode} from 'react'
import styled from 'styled-components'

import pewf from '../assets/pewf.png'

const StyledHeader = styled(Grid)`
  padding: 5vh 0px 5vh 0px;
  text-align: center;
`

const StyledContent = styled.div`
  width: 60%;
  margin: 0px auto 0px auto;
`

const LayoutWrapper = styled.div`
  min-height: 90vh;
`

type LayoutProps = {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => (
  <LayoutWrapper>
    <StyledHeader container justifyContent='center'>
      <Grid item xs={4}>
        <Image src={pewf} width='100' height='100' />
      </Grid>
      <Grid item xs={1} justifyContent='center' container>
        <Link href='/'>
          <Button>Home</Button>
        </Link>
      </Grid>
      <Grid item xs={1} justifyContent='center' container>
        <Link href='/Project'>
          <Button>Project</Button>
        </Link>
      </Grid>
      <Grid item xs={1} justifyContent='center' container>
        <Link href='/Contact'>
          <Button>Contact</Button>
        </Link>
      </Grid>
      {/* <Grid item xs={1} justifyContent='center' container> */}
      {/* <Link href='/Blog'> */}
      {/* <Button>Blog</Button> */}
      {/* </Link> */}
      {/* </Grid> */}
    </StyledHeader>
    <StyledContent>{children}</StyledContent>
  </LayoutWrapper>
)

Layout.displayName = 'Layout'
export default Layout
