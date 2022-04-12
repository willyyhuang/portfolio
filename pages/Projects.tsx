import ComputerIcon from '@mui/icons-material/Computer'
import GitHubIcon from '@mui/icons-material/GitHub'
import WorkIcon from '@mui/icons-material/Work'
import {Grid, Link, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material'
import Image from 'next/image'
import styled from 'styled-components'

const Row = styled(Grid)`
  padding: 32px 0px 32px 0px;
`

type ProjectData = {
  title: string
  link: string
  description: string
  techStack: string
  logo: string
  role?: string
  dimensions: {
    width: string
    height: string
  }
  github?: string
}

// TODO: move these to a DB or something
const projects: ProjectData[] = [
  {
    title: 'Building Stack',
    link: 'https://www.buildingstack.com/',
    description:
      'Building Stack is a cloud-based property management software designed to help Canadian building owners get the most out of their real estate portfolio',
    techStack: 'React, Typescript, Redux, Azure, Ant Design',
    logo: '/bstkLogo.png',
    role: 'Front-end Developer',
    dimensions: {
      width: '300',
      height: '300',
    },
  },
  {
    title: 'Session Tome',
    link: 'https://session-tome.dndmtl.com/',
    description:
      'A web application for managing Dungeons and Dragons Adventurer League Characters.',
    techStack: 'React, Typescript, GitHub, Laravel, AWS, MaterialUI',
    logo: '/sessionTomeLogo.png',
    dimensions: {
      width: '900',
      height: '200',
    },
    github: 'https://github.com/DnD-Montreal/session-tome',
  },
  {
    title: 'Cycl.io',
    link: 'https://github.com/m-triassi/cycl.io',
    description:
      'A web-based ERP system for managing the production and sale of imaginary bikes, to imaginary people.',
    techStack: 'React, Typescript, GitHub, Laravel, Ant Design',
    logo: '/cyclio.png',
    dimensions: {
      width: '500',
      height: '200',
    },
    github: 'https://github.com/m-triassi/cycl.io',
  },
]

const otherProjects: Omit<ProjectData, 'logo' | 'role' | 'dimensions' | 'link'>[] = [
  {
    title: 'portfolio',
    description: 'My simple portfolio website',
    techStack: 'React.js, Next.js, MaterialUI, CSS',
    github: 'https://github.com/willyyhuang/portfolio',
  },
  {
    title: 'octave-control-function-gui',
    description: 'Simple GUI for control system plotting.',
    techStack: 'Python, octave, matlab, Tkinter',
    github: 'https://github.com/willyyhuang/soen-385',
  },
  {
    title: 'ttv-earning',
    description: 'Simple data table website to view leaked Twitch earning data.',
    techStack: 'Typescript, React, MaterialUI',
    github: 'https://github.com/willyyhuang/ttvEarning',
  },
  {
    title: 'dog-breed-vision-classifier',
    description: 'Pytorch neural network training to predict dog breeds',
    techStack: 'Python, Pytorch, opencv, numpy',
  },
  {
    title: 'tic-tac-toe-like-game',
    description: 'Tic-tac-toe like game to study heuristic evaluation in AI',
    techStack: 'Python, numpy',
    github: 'https://github.com/bcobo341/COMP472_Project_2',
  },
  {
    title: 'instagratification',
    description: 'A Direct rip-off of Instagram™',
    techStack: 'React.js, Javascript, AntDesign',
    github: 'https://github.com/m-triassi/instagratification',
  },
  {
    title: 'Discord bot',
    description: 'A discord bot that responds to commands to output memes',
    techStack: 'Javascript, Discord API',
    github: 'https://github.com/willyyhuang/discordbot',
  },
]

const Project = () => {
  const getLogo = (project: ProjectData) => (
    <Image
      src={project.logo}
      width={project.dimensions.width}
      height={project.dimensions.height}
      style={{borderRadius: 10}}
    />
  )

  const getDescription = (project: ProjectData) => (
    <List>
      <ListItem>
        <Link variant='h4' href={project.link} style={{fontWeight: 600}} underline='none'>
          {project.title}
        </Link>
      </ListItem>
      <ListItem>
        <Typography variant='caption'>{project.description}</Typography>
      </ListItem>
      {project.role && (
        <ListItem>
          <ListItemAvatar>
            <WorkIcon />
          </ListItemAvatar>
          <ListItemText>{project.role}</ListItemText>
        </ListItem>
      )}
      <ListItem>
        <ListItemAvatar>
          <ComputerIcon />
        </ListItemAvatar>
        <ListItemText>{project.techStack}</ListItemText>
      </ListItem>
      {project.github && (
        <ListItem>
          <ListItemAvatar>
            <GitHubIcon />
          </ListItemAvatar>
          <ListItemText>
            <a href={project.github}>Repository</a>
          </ListItemText>
        </ListItem>
      )}
    </List>
  )

  return (
    <>
      <Row item xs={12} container justifyContent='center'>
        <Typography variant='h4' style={{fontWeight: 600}}>
          Projects and work experience
        </Typography>
      </Row>
      {projects.map((project, index) => (
        <Row container item xs={12} spacing={4} key={project.title}>
          <Grid item container xs={12} md={6} justifyContent='end'>
            {index % 2 === 0 ? getLogo(project) : getDescription(project)}
          </Grid>
          <Grid item xs={12} md={6}>
            {index % 2 === 0 ? getDescription(project) : getLogo(project)}
          </Grid>
        </Row>
      ))}
      <Row item xs={12} container justifyContent='center'>
        <Typography variant='h4' style={{fontWeight: 600}}>
          Other projects
        </Typography>
      </Row>
      <Row container>
        {otherProjects.map((project) => (
          <Grid
            container
            item
            xs={12}
            style={{
              border: '2px solid',
              padding: 16,
              marginBottom: 24,
              boxShadow: '5px 5px',
              borderRadius: 10,
            }}>
            <Grid item xs={12}>
              <Link href={project?.github} underline='none'>
                {project?.github && <GitHubIcon fontSize='small' style={{marginRight: 6}} />}
                {project.title}
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='caption'>{project.description}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='caption'>{project.techStack}</Typography>
            </Grid>
          </Grid>
        ))}
      </Row>
    </>
  )
}

Project.displayName = 'Project'
export default Project
