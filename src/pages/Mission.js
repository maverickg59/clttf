import React from 'react'
import { PageHeader } from '../components'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Mission = () => {
  return (
    <div>
      <PageHeader text='Discover the purpose of CLTTF.' icon='handshake' />
      <Row className='u-margin-bot-giant justify-content-center'>
        <Col xs={10} sm={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                The Coach Lawson Track and Training Foundation was established
                to honor the legacy of Mike “Coach” Lawson who tragically lost
                his life in a motorcycle accident. Our mission is reduce the
                prevalence and severity of motorcycle accidents by assisting
                riders gain access to high quality training and safety
                equipment. We solicit donations of gear, track days, bike
                rentals, training courses and funds to achieve our mission. Each
                rider who applies for any scholarship will be evaluated by our
                board of directors on a holistic basis. Scholarships will be
                furnished to riders whom the board deems qualified candidates.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Mission
