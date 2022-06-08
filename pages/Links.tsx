import {Button, Grid} from '@mui/material'
import Image from 'next/image'
import styled from 'styled-components'

const StyledLink = styled.a`
  width: 50%;
  @media only screen and (max-width: 1200px) {
    width: 80%;
  }
  text-align: center;
  text-decoration: none;
`

type LinkData = {
  url: string
  name: string
  logoSrc: string
}

const LINKS_TO_DISPLAY: Array<LinkData> = [
  {
    url: 'https://www.amazon.ca/hz/wishlist/ls/2YBR1A54E7FUX?ref_=wl_share',
    name: 'Amazon Wishlist',
    logoSrc: '/amazon-icon.png',
  },
  {
    url: 'https://anilist.co/user/pewf/animelist',
    name: 'AniList',
    logoSrc: '/anilist-icon.png',
  },
  {
    url: 'https://ko-fi.com/pewfy',
    name: 'Ko-fi',
    logoSrc: '/kofi.png',
  },
  {
    url: 'https://paypal.me/pewf',
    name: 'Paypal',
    logoSrc: '/paypal-icon.webp',
  },
]

const Links = () => (
  <Grid container>
    {LINKS_TO_DISPLAY.map((link) => (
      <Grid item container justifyContent='center' key={link.name}>
        <StyledLink href={link.url} target='_blank' rel='noreferrer'>
          <Button
            fullWidth
            sx={{
              borderRadius: 16,
              border: '1px solid',
              marginBottom: '16px',
            }}>
            <div style={{marginRight: 16, display: 'flex'}}>
              <Image src={link.logoSrc} width={40} height={40} style={{borderRadius: 16}} />
            </div>
            {link.name}
          </Button>
        </StyledLink>
      </Grid>
    ))}
  </Grid>
)

Links.displayName = 'Links'
export default Links
