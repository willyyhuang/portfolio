import ContactPageIcon from '@mui/icons-material/ContactPage'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PersonIcon from '@mui/icons-material/Person'
import TaskIcon from '@mui/icons-material/Task'
import {Button, Grid, Link as MuiLink} from '@mui/material'
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
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  width: 60%;
  margin: 0px auto 0px auto;
`

const LayoutWrapper = styled.div`
  min-height: 90vh;
`

const StyledFooter = styled.div`
  margin-top: 5vh;
`

const IconLink = styled(MuiLink)`
  margin-left: 12px;
`

type LayoutProps = {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => (
  <LayoutWrapper>
    <StyledHeader container justifyContent='center'>
      <Grid item xs={12} md={4}>
        <Image src={pewf} width='100' height='100' />
      </Grid>
      <Grid item xs={12} md={1} justifyContent='center' container>
        <Link href='/'>
          <Button startIcon={<PersonIcon />}>About</Button>
        </Link>
      </Grid>
      <Grid item xs={12} md={1} justifyContent='center' container>
        <Link href='/Projects'>
          <Button startIcon={<TaskIcon />}>Projects</Button>
        </Link>
      </Grid>
      <Grid item xs={12} md={1} justifyContent='center' container>
        <Link href='/Contact'>
          <Button startIcon={<ContactPageIcon />}>Contact</Button>
        </Link>
      </Grid>
    </StyledHeader>
    <StyledContent>
      <Grid container justifyContent='center'>
        {children}
      </Grid>
    </StyledContent>
    <StyledFooter>
      <Grid item xs={12} container justifyContent='center'>
        <IconLink href='https://www.linkedin.com/in/wlsun/' target='_blank'>
          <LinkedInIcon />
        </IconLink>
        <IconLink href='https://www.instagram.com/_wlsun/' target='_blank'>
          <InstagramIcon />
        </IconLink>
        <IconLink href='https://github.com/willyyhuang' target='_blank'>
          <GitHubIcon />
        </IconLink>
        <IconLink href='mailto:wh.dev@icloud.com'>
          <EmailIcon />
        </IconLink>
        <a href='https://ko-fi.com/F1F1AJCDR' target='_blank' rel='noreferrer'>
          <img
            height='24'
            src='https://cdn.ko-fi.com/cdn/kofi2.png?v=3'
            alt='Buy Me a Coffee at ko-fi.com'
          />
        </a>
      </Grid>
    </StyledFooter>
  </LayoutWrapper>
)

Layout.displayName = 'Layout'
export default Layout
