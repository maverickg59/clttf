import React, { Fragment } from 'react'
import { PageHeader, Links } from '../components'
import { SOCIAL_LINKS } from '../lib'
import { Row, Col, Card } from 'react-bootstrap'
import { Button } from 'maverick-toolkit-react'

const Contact = () => {
  return (
    <Fragment>
      <PageHeader text='Contact us:' />
      <Row className='justify-content-center u-margin-bot-giant'>
        <Col xs='auto'>
          <Card style={{ padding: '40px 40px 10px 40px' }}>
            <Card.Body>
              <Card.Text>
                <Row className='justify-content-center u-margin-bot-medium'>
                  <Button
                    buttonAsLink
                    color='danger'
                    href='mailto:coachlawsonttf@gmail.com?subject=Application%20for%20Coach%20Lawson%20TTF%20Scholarship'
                    className='button-fix'>
                    <span>Click to email: coachlawsonttf@gmail.com</span>
                  </Button>
                </Row>
                <Row className='justify-content-center u-margin-bot-giant'>
                  <Button
                    buttonAsLink
                    color='danger'
                    href='tel:+14803895551'
                    className='button-fix'>
                    <span>Click to call: {`(480) 389-5551`}</span>
                  </Button>
                </Row>
                <Row className='justify-content-center'>
                  <Col xs='auto'>
                    <Links useAltIcon links={SOCIAL_LINKS} linkTheme='dark' />
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Contact
