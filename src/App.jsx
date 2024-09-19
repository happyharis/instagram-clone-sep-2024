import { Col, Container, Row } from 'react-bootstrap'
import IconButton from './components/IconButton'
import ProfileHeader from './components/ProfileHeader'
import { createContext, useState } from 'react'
import { PROFILE_DATA } from "./data";
import ImageGrid from './components/ImageGrid';
import AddPostModal from './components/AddPostModal';

export const ProfileContext = createContext()


export default function App() {


  const [showModal, setShowModal] = useState(false)
  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)
  return (
    <ProfileContext.Provider value={PROFILE_DATA}>
      {/* Don't delete the code in the Row */}
      <Row>
        <Col sm={1}
          className='d-flex flex-column justify-content-start align-items-center vh-100 bg-light'
          style={{ position: 'sticky', top: 0 }}
        >
          <IconButton className='bi bi-instagram' isTop></IconButton>
          <IconButton className='bi bi-house'></IconButton>
          <IconButton className='bi bi-search'></IconButton>
          <IconButton className='bi bi-compass'></IconButton>
          <IconButton className='bi bi-film'></IconButton>
          <IconButton className='bi bi-chat'></IconButton>
          <IconButton className='bi bi-heart'></IconButton>
          <IconButton className='bi bi-plus-square' onClick={openModal}></IconButton>
          <IconButton className='bi bi-person-circle'></IconButton>
          <IconButton className='bi bi-list' isBottom></IconButton>
        </Col>
        <Col sm={11}>
          <Container>
            <ProfileHeader />
            <ImageGrid />
            <AddPostModal show={showModal} handleClose={closeModal} />
          </Container>
        </Col>
      </Row>
    </ProfileContext.Provider>
  )
}
