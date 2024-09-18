import { Col, Row } from 'react-bootstrap'
import IconButton from './components/IconButton'
import ProfileHeader from './components/ProfileHeader'

export default function App() {
  return (
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
        <IconButton className='bi bi-plus-square'></IconButton>
        <IconButton className='bi bi-person-circle'></IconButton>
        <IconButton className='bi bi-list' isBottom></IconButton>
      </Col>
      <Col sm={11}>
        <ProfileHeader />
      </Col>
    </Row>
  )
}
