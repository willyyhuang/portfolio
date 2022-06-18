import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material'
import coffee from '@public/coffee.png'
import keyboard from '@public/keyboard.png'
import livia from '@public/livia.png'
import Image from 'next/image'
import styled from 'styled-components'

const StyledImage = styled(Image)`
  border-radius: 10px;
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`

type SkillData = {
  name: string
  logo: string
}

const skills: SkillData[] = [
  {
    name: 'React.js',
    logo: '/skills/reactLogo.png',
  },
  {
    name: 'Redux.js',
    logo: '/skills/reduxLogo.png',
  },
  {
    name: 'Typescript',
    logo: '/skills/tsLogo.svg',
  },
  {
    name: 'Node.js',
    logo: '/skills/nodeLogo.png',
  },
  {
    name: 'Next.js',
    logo: '/skills/nextjsLogo.png',
  },
  {
    name: 'Storybook.js',
    logo: '/skills/storybookLogo.png',
  },
  {
    name: 'Webpack',
    logo: '/skills/webpackLogo.png',
  },
  {
    name: 'Cypress',
    logo: '/skills/cypressLogo.png',
  },
  {
    name: 'Python',
    logo: '/skills/pythonLogo.png',
  },
  {
    name: 'Git',
    logo: '/skills/gitLogo.png',
  },
  {
    name: 'Microsoft Azure',
    logo: '/skills/azureLogo.png',
  },
]

const learnings: SkillData[] = [
  {
    name: 'Docker',
    logo: '/skills/dockerLogo.png',
  },
  {
    name: 'AWS',
    logo: '/skills/awsLogo.svg',
  },
  {
    name: 'Vite',
    logo: '/skills/viteLogo.svg',
  },
  {
    name: 'Express.js',
    logo: '/skills/expressjsLogo.png',
  },
  {
    name: 'Latex/Overleaf',
    logo: '/skills/overleafLogo.png',
  },
  {
    name: 'GraphQL',
    logo: '/skills/graphqlLogo.png',
  },
]

const About = () => (
  <>
    <Grid container spacing={8} style={{marginBottom: 32}}>
      <Grid item container xs={12} justifyContent='center'>
        <Typography>
          Hi! Welcome to my portfolio website! I am Wilson, a Software Engineer specialized in
          Front-end development based in Montreal, Quebec, Canada.
        </Typography>
      </Grid>
      <Grid item container xs={12} justifyContent='center'>
        <Typography>
          I am a graduate at Concordia University in Software Engineering, mainly interested in
          Front-end development (Web/Mobile), DevOps and project management. Other than those, I
          have been actively learning various topics in artificial intelligence such as computer
          vision and machine learning.
        </Typography>
      </Grid>
      <Grid item container xs={12} justifyContent='center'>
        <Typography variant='h4'>Hobbies</Typography>
      </Grid>
      <Grid item xs={6} style={{alignSelf: 'center'}}>
        <StyledImage layout='responsive' src={coffee} alt='coffee' />
      </Grid>
      <Grid item xs={6} style={{alignSelf: 'center'}}>
        <Typography>
          I enjoy making latte or cappuccino every morning, have been actively learning latte art
          since November 2021.
        </Typography>
      </Grid>
      <Grid item xs={6} style={{alignSelf: 'center'}}>
        <Typography>
          I enjoy watching korean dramas and animes when I am not coding. Traveling, fashion and
          playing video games are also some of my favorite pastimes.
        </Typography>
      </Grid>
      <Grid item xs={6} style={{alignSelf: 'center'}}>
        <StyledImage layout='responsive' src={livia} alt='livia picture' />
      </Grid>
      <Grid item xs={6} style={{alignSelf: 'center'}}>
        <StyledImage layout='responsive' src={keyboard} alt='keyboard' />
      </Grid>
      <Grid item xs={6} style={{alignSelf: 'center'}}>
        <Typography>
          Keyboards are essential tools for developers, here is one of the keyboard I made from
          scratch (more or less), the parts are bought from a group buy, then it is assembled with
          soldered switches and custom keycaps.
        </Typography>
      </Grid>
    </Grid>
    <Grid item container xs={12} justifyContent='center'>
      <Typography variant='h4'>Skills</Typography>
    </Grid>
    <Grid container>
      <Grid item container xs={6} justifyContent='end'>
        <List>
          <ListItem>
            <ListItemText>
              <Typography style={{fontSize: '150%', fontWeight: 500}}>
                Currently learning
              </Typography>
            </ListItemText>
          </ListItem>
          {learnings.map((skill) => (
            <ListItem key={skill.name}>
              <Tooltip title={skill.name}>
                <ListItemAvatar>
                  <StyledImage src={skill.logo} width='50' height='50' alt={skill.name} />
                </ListItemAvatar>
              </Tooltip>
              <ListItemText>{skill.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Divider orientation='vertical' flexItem />
      <Grid item xs={5}>
        <List>
          <ListItem>
            <ListItemText>
              <Typography style={{fontSize: '150%', fontWeight: 500}}>Tools</Typography>
            </ListItemText>
          </ListItem>
          {skills.map((skill) => (
            <ListItem key={skill.name}>
              <Tooltip title={skill.name}>
                <ListItemAvatar>
                  <StyledImage src={skill.logo} width='50' height='50' alt={skill.name} />
                </ListItemAvatar>
              </Tooltip>
              <ListItemText>{skill.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  </>
)

About.displayName = 'About'
export default About
