import {Modal} from '@mui/material'
import Image from 'next/image'
import {useState} from 'react'
import styled from 'styled-components'

type ImageModalProps = {
  src: any
  isExternal?: boolean
  style?: any
}

const ModalContainer = styled.div`
  position: absolute;
  max-width: 50vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media only screen and (max-width: 400px) {
    max-width: 80vw;
  }
`

const ImageModal = ({src, isExternal, style}: ImageModalProps) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false)
  return (
    <>
      <Modal open={isImageModalOpen} onClose={() => setIsImageModalOpen(false)}>
        <ModalContainer>
          {isExternal ? <img src={src} style={{width: '100%'}} /> : <Image src={src} />}
        </ModalContainer>
      </Modal>
      <div onClick={() => setIsImageModalOpen(true)}>
        {isExternal ? <img src={src} style={style} /> : <Image src={src} style={style} />}
      </div>
    </>
  )
}

ImageModal.displayName = 'ImageModal'
export default ImageModal
