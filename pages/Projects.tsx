import Carousel from '@components/Carousel'
import ComputerIcon from '@mui/icons-material/Computer'
import GitHubIcon from '@mui/icons-material/GitHub'
import WorkIcon from '@mui/icons-material/Work'
import {Grid, Link, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material'
import bstkLogo from '@public/projects/bstkLogo.png'
import cyclioLogo from '@public/projects/cyclio.png'
import mochiLogo from '@public/projects/mochi-banner.png'
import sessionTomeLogo from '@public/projects/sessionTomeLogo.png'
import Image from 'next/image'
import styled from 'styled-components'

type ProjectData = {
  title: string
  link: string
  description: string
  techStack: string
  logo: any
  role?: string
  github?: string
}

type OtherProjectData = Omit<ProjectData, 'logo' | 'role' | 'dimensions' | 'link'>

const projects: Array<ProjectData> = [
  {
    title: 'Building Stack',
    link: 'https://www.buildingstack.com/',
    description:
      'Building Stack is a cloud-based property management software designed to help Canadian building owners get the most out of their real estate portfolio',
    techStack: 'React, Typescript, Redux, Azure, Ant Design',
    logo: bstkLogo,
    role: 'Front-end Developer',
  },
  {
    title: 'Mochai.info',
    link: 'https://mochai.info/',
    description:
      'Mochai.info is a Lost Ark community website to promote the guild Mochi and to help guild managers to display data.',
    techStack: 'Next.js, React, Typescript, GitHub, Vercel, MaterialUI, GoogleApis, Webhook',
    logo: mochiLogo,
  },
  {
    title: 'Session Tome',
    link: 'https://session-tome.dndmtl.com/',
    description:
      'A web application for managing Dungeons and Dragons Adventurer League Characters.',
    techStack: 'React, Typescript, GitHub, Laravel, AWS, MaterialUI',
    logo: sessionTomeLogo,
    github: 'https://github.com/DnD-Montreal/session-tome',
  },
  {
    title: 'Cycl.io',
    link: 'https://github.com/m-triassi/cycl.io',
    description:
      'A web-based ERP system for managing the production and sale of imaginary bikes, to imaginary people.',
    techStack: 'React, Typescript, GitHub, Laravel, Ant Design',
    logo: cyclioLogo,
    github: 'https://github.com/m-triassi/cycl.io',
  },
]

const otherProjects: Array<OtherProjectData> = [
  {
    title: 'portfolio',
    description:
      'My simple portfolio website built with Next.js to take advantage of SSG and SEO, hosted with vercel.',
    techStack: 'React.js, Next.js, MaterialUI, CSS, GraphQL',
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

const Row = styled(Grid)`
  padding: 32px 0px 32px 0px;
`

const StyledCaption = styled.div`
  white-space: initial;
  min-height: 70px;
`

const Project = () => {
  const getLogo = (project: ProjectData) => (
    <Image alt={project.title} layout='fixed' src={project.logo} style={{borderRadius: 10}} />
  )

  const getDescription = (project: ProjectData) => (
    <List>
      <ListItem>
        <Link
          variant='h4'
          href={project.link}
          style={{fontWeight: 600}}
          underline='none'
          target='_blank'>
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
            <Link href={project.github} target='_blank' style={{color: '#0096d6'}}>
              Repository
            </Link>
          </ListItemText>
        </ListItem>
      )}
    </List>
  )

  const renderItem = (item: OtherProjectData) => (
    <div
      style={{
        border: '2px solid',
        padding: 16,
        boxShadow: '5px 5px',
        borderRadius: 10,
        margin: 12,
      }}>
      <div>
        <Link href={item?.github} underline='none' target='_blank'>
          {item?.github && <GitHubIcon fontSize='small' style={{marginRight: 6}} />}
          {item.title}
        </Link>
      </div>
      <StyledCaption>
        <Typography variant='caption'>{item.description}</Typography>
      </StyledCaption>
      <div>
        <Typography variant='caption'>{item.techStack}</Typography>
      </div>
    </div>
  )

  return (
    <>
      <Row item xs={12} container justifyContent='center'>
        <Typography variant='h4' style={{fontWeight: 600}}>
          Projects and work experience
        </Typography>
      </Row>
      {projects.map((project, index) => (
        <Row container item xs={12} spacing={4} key={project.title} style={{marginBottom: 36}}>
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
        <Carousel<OtherProjectData> items={otherProjects} itemRenderer={renderItem} />
      </Row>
    </>
  )
}

Project.displayName = 'Project'
export default Project
