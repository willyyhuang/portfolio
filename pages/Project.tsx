import ComputerIcon from '@mui/icons-material/Computer'
import GitHubIcon from '@mui/icons-material/GitHub'
import WorkIcon from '@mui/icons-material/Work'
import {Grid, Link, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material'
import Image from 'next/image'

import bstkLogo from '../assets/bstkLogo.png'
import cyclioLogo from '../assets/cyclio.png'
import sessionTomeLogo from '../assets/sessionTomeLogo.png'

const projects = [
  {
    title: 'Building Stack',
    link: 'https://www.buildingstack.com/',
    description:
      'Building Stack is a cloud-based property management software designed to help Canadian building owners get the most out of their real estate portfolio',
    techStack: 'React, Typescript, Redux, Azure, Ant Design',
    logo: bstkLogo,
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
    logo: sessionTomeLogo,
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
    logo: cyclioLogo,
    dimensions: {
      width: '500',
      height: '200',
    },
    github: 'https://github.com/m-triassi/cycl.io',
  },
]

type ProjectData = {
  title: string
  link: string
  description: string
  techStack: string
  logo: any
  role?: string
  dimensions: {
    width: string
    height: string
  }
  github?: string
}

const Project = () => {
  const getLogo = (project: ProjectData) => (
    <Image src={project.logo} width={project.dimensions.width} height={project.dimensions.height} />
  )

  const getDescription = (project: ProjectData) => (
    <List>
      <ListItem>
        <Link variant='h4' href={project.link} underline='none'>
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
    <Grid container justifyContent='center'>
      <Grid item xs={12} container justifyContent='center'>
        <Typography variant='h4'>Projects and work experience</Typography>
      </Grid>
      {projects.map((project, index) => (
        <Grid
          container
          item
          xs={12}
          spacing={4}
          key={project.title}
          style={{margin: '16px 0px 16px 0px'}}>
          <Grid item container xs={6} justifyContent='end'>
            {index % 2 === 0 ? getLogo(project) : getDescription(project)}
          </Grid>
          <Grid item xs={6}>
            {index % 2 === 0 ? getDescription(project) : getLogo(project)}
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

Project.displayName = 'Project'
export default Project
