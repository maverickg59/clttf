import React, { Fragment } from 'react'
import { PageHeader, Links } from '../components'
import { SOCIAL_LINKS } from '../lib'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Contact = () => {
  return (
    <Fragment>
      <PageHeader text='Contact us:' />
      <Row className='justify-content-center u-margin-bot-large'>
        <Col xs='auto'>
          <span>Shoot us an email: coachlawsonttf@gmail.com</span>
        </Col>
      </Row>
      <Row className='justify-content-center u-margin-bot-giant'>
        <Col xs='auto'>
          <Links useAltIcon links={SOCIAL_LINKS} linkTheme='dark' />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Contact
