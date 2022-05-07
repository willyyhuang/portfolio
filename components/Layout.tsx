import ArticleIcon from '@mui/icons-material/Article'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PersonIcon from '@mui/icons-material/Person'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import {Button, CircularProgress, Grid, Link as MuiLink} from '@mui/material'
import {hexEncode} from '@utils/index'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import {ReactNode, useState} from 'react'
import styled from 'styled-components'

const StyledHeader = styled(Grid)`
  padding: 5vh 0px 5vh 0px;
  text-align: center;
`

const StyledContent = styled.div`
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
  width: 60%;
  margin: 32px auto 0px auto;
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

const Layout = ({children}: LayoutProps) => {
  const [loading, setIsLoading] = useState<boolean>(false)

  Router.events.on('routeChangeStart', () => setIsLoading(true))
  Router.events.on('routeChangeComplete', () => setIsLoading(false))
  Router.events.on('routeChangeError', () => setIsLoading(false))

  return (
    <LayoutWrapper>
      <StyledHeader container justifyContent='center'>
        <Grid item xs={12} md={4}>
          <Image
            src='/logo.png'
            width='100'
            height='100'
            onClick={() =>
              navigator.clipboard.writeText(
                hexEncode(process.env.NEXT_PUBLIC_SECRET_PASSWORD || ''),
              )
            }
            style={{cursor: 'pointer'}}
          />
        </Grid>
        <Grid item xs={12} md={1} justifyContent='center' container>
          <Link href='/'>
            <Button startIcon={<PersonIcon />}>About</Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={1} justifyContent='center' container>
          <Link href='/Projects'>
            <Button startIcon={<ArticleIcon />}>Projects</Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={1} justifyContent='center' container>
          <Link href='/Miscellaneous'>
            <Button startIcon={<ShuffleIcon />}>Miscellaneous</Button>
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
          {loading ? <CircularProgress /> : children}
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
          <IconLink href='mailto:wh@pewf.dev'>
            <EmailIcon />
          </IconLink>
          <IconLink href='https://ko-fi.com/F1F1AJCDR' target='_blank'>
            <Image height='24' width='24' src='/kofi.png' />
          </IconLink>
        </Grid>
      </StyledFooter>
    </LayoutWrapper>
  )
}

Layout.displayName = 'Layout'
export default Layout
