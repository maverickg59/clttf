import React, { Fragment } from 'react'
import { Button } from 'maverick-toolkit-react'
import { PageHeader } from '../components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { SUPPORT_CARDS } from '../lib'

const Support = () => {
  return (
    <Fragment>
      <PageHeader text='Discover how you can help.' icon='hand-holding-heart' />
      <Row className='u-margin-bot-medium justify-content-center'>
        <Col xs={12} sm={10}>
          {SUPPORT_CARDS.map((row, i) => {
            return (
              <CardDeck key={row[i].title} className='justify-content-center'>
                {row.map(({ title, text }) => {
                  return (
                    <Col key={title} xs={12} sm={5}>
                      <div className='u-margin-bot-giant'>
                        <Card>
                          <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{text}</Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </Col>
                  )
                })}
              </CardDeck>
            )
          })}
        </Col>
      </Row>
      <Row className='u-margin-bot-large u-text-center justify-content-center'>
        <Col xs={11}>
          <p>
            Help out by contacting us at{' '}
            <a href='mailto:coachlawsonttf@gmail.com'>
              coachlawsonttf@gmail.com
            </a>{' '}
            or donate below:
          </p>
        </Col>
      </Row>
      <Row className='u-margin-bot-large u-text-center justify-content-center'>
        <Col className='u-margin-bot-giant' xs='12' lg='auto'>
          <Button
            buttonAsLink
            color='danger'
            href='https://www.paypal.com/donate?hosted_button_id=VMLY57KNSCXQS'>
            <span>Donate using PayPal</span>
          </Button>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Support
