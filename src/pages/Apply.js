import React, { Fragment } from 'react'
import { PageHeader } from '../components'
import { Row, Col, Card } from 'react-bootstrap'
import { Button } from 'maverick-toolkit-react'

const Apply = () => {
  return (
    <Fragment>
      <PageHeader
        text='How to apply for a scholarship.'
        icon='clipboard-list'
      />
      <Row className='justify-content-center u-margin-bot-giant'>
        <Col xs='auto'>
          <Card style={{ padding: '40px' }}>
            <Card.Body>
              <Card.Text>
                <Row className='justify-content-center u-margin-bot-giant'>
                  You can apply for a scholarship by sending an email or calling
                  us. <br /> You'll hear back within 24 hours.
                </Row>
                <Row className='justify-content-center u-margin-bot-medium'>
                  <Button
                    buttonAsLink
                    color='danger'
                    href='mailto:coachlawsonttf@gmail.com?subject=Application%20for%20Coach%20Lawson%20TTF%20Scholarship'
                    className='button-fix'>
                    <span>Click to email: coachlawsonttf@gmail.com</span>
                  </Button>
                </Row>
                <Row className='justify-content-center'>
                  <Button
                    buttonAsLink
                    color='danger'
                    href='tel:+14803895551'
                    className='button-fix'>
                    <span>Click to call: {`(480) 389-5551`}</span>
                  </Button>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Apply
