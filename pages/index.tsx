import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import styled from 'styled-components'

const StyledImage = styled(Image)`
  border-radius: 10px;
`
type SkillData = {
  name: string
  logo: string
}

const skills: SkillData[] = [
  {
    name: 'React.js',
    logo: '/reactLogo.png',
  },
  {
    name: 'Redux.js',
    logo: '/reduxLogo.png',
  },
  {
    name: 'Typescript',
    logo: '/tsLogo.svg',
  },
  {
    name: 'Python',
    logo: '/pythonLogo.png',
  },
  {
    name: 'Git',
    logo: '/gitLogo.png',
  },
  {
    name: 'Node.js',
    logo: '/nodeLogo.png',
  },
  {
    name: 'Storybook.js',
    logo: '/storybookLogo.png',
  },
  {
    name: 'Cypress',
    logo: '/cypressLogo.png',
  },
]

const learnings: SkillData[] = [
  {
    name: 'Next.js',
    logo: '/nextjsLogo.png',
  },
  {
    name: 'Docker',
    logo: '/dockerLogo.png',
  },
  {
    name: 'AWS',
    logo: '/awsLogo.svg',
  },
]

const About = () => (
  <>
    <Grid container spacing={6} style={{marginBottom: 32}}>
      <Grid item container xs={12} justifyContent='center'>
        <Typography>
          Hi! I am Wilson, a Software Engineer specialized in Front-end web development based in
          Montreal, Quebec, Canada.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <StyledImage src='/coffee.png' width='900' height='500' />
      </Grid>
      <Grid item xs={6} style={{alignSelf: 'center'}}>
        <Typography>
          I enjoy making latte or cappuccino every morning, have been actively learning latte art
          since November 2021.
        </Typography>
        <Typography style={{textAlign: 'center'}}>&quot;Turn coffee into code&quot;</Typography>
      </Grid>
      <Grid item xs={6} style={{alignSelf: 'center'}}>
        <Typography>
          I enjoy watching korean dramas and animes when I am not coding. Traveling, collecting
          fragrance, building small hardware and playing video games are also my favorite hobbies.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <StyledImage src='/livia.png' width='360' height='450' />
      </Grid>
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
            <ListItem>
              <ListItemAvatar>
                <StyledImage src={skill.logo} width='50' height='50' />
              </ListItemAvatar>
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
              <Typography style={{fontSize: '150%', fontWeight: 500}}>Skills</Typography>
            </ListItemText>
          </ListItem>
          {skills.map((skill) => (
            <ListItem>
              <ListItemAvatar>
                <StyledImage src={skill.logo} width='50' height='50' />
              </ListItemAvatar>
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
