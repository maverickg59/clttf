import React, { Fragment } from 'react'
import { PageHeader } from '../components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { HOME_PAGE } from '../lib'

const Home = () => {
  const { img, section } = HOME_PAGE
  return (
    <Fragment>
      <Row className='justify-content-center'>
        <Col xs={10} sm='auto'>
          <Row className='justify-content-center'>
            <img
              className='c-about-logo u-margin-bot-giant'
              src={img.src}
              alt={img.alt}
            />
          </Row>
        </Col>
      </Row>
      <PageHeader text={section.title} />
      <Row className='u-margin-bot-medium justify-content-center'>
        <Col className='u-margin-bot-giant' xs={10} sm={6}>
          <Card>
            <Card.Body>
              <Card.Text>{section.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Home
