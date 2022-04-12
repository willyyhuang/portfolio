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
]

const learnings: SkillData[] = [
  {
    name: 'Next.js',
    logo: '/nextjsLogo.png',
  },
  {
    name: 'AWS',
    logo: '/awsLogo.svg',
  },
]

const About = () => (
  <>
    <Typography>
      Hi! I am Wilson, a front-end developer based in Montreal, Quebec, Canada.
    </Typography>
    <Grid container>
      <Grid item container xs={6} justifyContent='end'>
        <List>
          <ListItem>
            <ListItemText>Currently learning</ListItemText>
          </ListItem>
          {learnings.map((skill) => (
            <ListItem>
              <ListItemAvatar>
                <Image src={skill.logo} width='50' height='50' />
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
            <ListItemText>Skills</ListItemText>
          </ListItem>
          {skills.map((skill) => (
            <ListItem>
              <ListItemAvatar>
                <Image src={skill.logo} width='50' height='50' />
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
