import Carousel from '@components/Carousel'
import {Typography} from '@mui/material'

const APEX_CLIPS: Array<string> = [
  'https://streamable.com/e/6fwqz8',
  'https://streamable.com/e/n12p6t',
  'https://streamable.com/e/2xyv2p',
  'https://streamable.com/e/5a0zs9',
  'https://streamable.com/e/fz2lkf',
  'https://streamable.com/e/gzi31i',
  'https://streamable.com/e/451t37',
  'https://streamable.com/e/fvj7bh',
  'https://streamable.com/e/4lau1h',
  'https://streamable.com/e/kstyh1',
  'https://streamable.com/e/wcxbmz',
  'https://streamable.com/e/qgi75d',
  'https://streamable.com/e/uwt8t6',
  'https://streamable.com/e/m4dycv',
  'https://streamable.com/e/bfem0r',
  'https://streamable.com/e/roc16y',
  'https://streamable.com/e/8ctwn5',
  'https://streamable.com/e/ejz1d5',
  'https://streamable.com/e/431ud5',
  'https://streamable.com/e/u6hbnl',
  'https://streamable.com/e/233ldc',
]

const LEAGUE_CLIPS: Array<string> = [
  'https://streamable.com/e/dsobl0',
  'https://streamable.com/e/ouc98p',
]

const GameClips = () => {
  const itemRenderer = (item: string) => (
    <div style={{width: '100%', height: 0, position: 'relative', paddingBottom: '56.250%'}}>
      <iframe
        title='streamable'
        src={`${item}?loop=0`}
        frameBorder='0'
        width='100%'
        height='100%'
        allowFullScreen
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          overflow: 'hidden',
        }}
      />
    </div>
  )
  return (
    <div style={{width: '100%', margin: '0px auto'}}>
      <Typography variant='h5' style={{textAlign: 'center', marginBottom: 12}}>
        Apex Legends
      </Typography>
      <Carousel<string> items={APEX_CLIPS} itemRenderer={itemRenderer} />
      <Typography variant='h5' style={{textAlign: 'center', marginBottom: 12}}>
        League of Legends
      </Typography>
      <Carousel<string> items={LEAGUE_CLIPS} itemRenderer={itemRenderer} />
    </div>
  )
}

GameClips.displayName = 'GameClips'
export default GameClips
