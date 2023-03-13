import {Button, Grid} from '@mui/material'
import amazonIcon from '@public/links/amazon-icon.png'
import aniListIcon from '@public/links/anilist-icon.png'
import kofiIcon from '@public/links/kofi.png'
import paypalIcon from '@public/links/paypal-icon.webp'
import Image from 'next/legacy/image'
import styled from 'styled-components'

const StyledLink = styled.a`
  width: 50%;
  @media only screen and (max-width: 1200px) {
    width: 80%;
  }
  text-align: center;
  text-decoration: none;
`

const AnimatedItem = styled(Grid)<{second: string}>`
  animation: ${(props) => `fadeIn ${props.second}`};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

type LinkData = {
  url: string
  name: string
  logoSrc: any
}

const LINKS_TO_DISPLAY: Array<LinkData> = [
  {
    url: 'https://www.amazon.ca/hz/wishlist/ls/2YBR1A54E7FUX?ref_=wl_share',
    name: 'Amazon Wishlist',
    logoSrc: amazonIcon,
  },
  {
    url: 'https://anilist.co/user/pewf/animelist',
    name: 'AniList',
    logoSrc: aniListIcon,
  },
  {
    url: 'https://ko-fi.com/pewfy',
    name: 'Ko-fi',
    logoSrc: kofiIcon,
  },
  {
    url: 'https://paypal.me/pewf',
    name: 'Paypal',
    logoSrc: paypalIcon,
  },
]

const Links = () => (
  <Grid container>
    {LINKS_TO_DISPLAY.map((link, index) => (
      <AnimatedItem item container justifyContent='center' key={link.name} second={`${index * 2}s`}>
        <StyledLink href={link.url} target='_blank' rel='noreferrer'>
          <Button
            fullWidth
            sx={{
              borderRadius: 16,
              border: '1px solid',
              marginBottom: '16px',
            }}>
            <div style={{marginRight: 16, display: 'flex'}}>
              <Image
                src={link.logoSrc}
                width={40}
                height={40}
                style={{borderRadius: 16}}
                alt={`${link.name}-logo`}
              />
            </div>
            {link.name}
          </Button>
        </StyledLink>
      </AnimatedItem>
    ))}
  </Grid>
)

Links.displayName = 'Links'
export default Links
