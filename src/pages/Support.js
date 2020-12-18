import React from 'react'
import { Icon, Button } from 'maverick-toolkit-react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { SUPPORT_CARDS } from '../lib'

const Support = () => {
  return (
    <div className='support-body'>
      <Row className='u-margin-bot-giant justify-content-center'>
        <Col xs='auto'>
          <Icon icon='hand-holding-heart' size='6x' color='#343a40' />
        </Col>
      </Row>
      <Row className='u-margin-bot-giant justify-content-center'>
        <Col xs='auto'>
          <h1 className='u-h2'>Discover how you can help.</h1>
        </Col>
      </Row>
      <Row className='u-margin-bot-medium justify-content-sm-center'>
        <Col xs={12} sm={10}>
          {SUPPORT_CARDS.map((row, i) => {
            return (
              <CardDeck
                key={row[i].title}
                className='u-margin-bot-giant justify-content-center'>
                {row.map(({ title, text }) => {
                  return (
                    <Col key={title} xs={12} sm={5}>
                      <Card>
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                          <Card.Text>{text}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })}
              </CardDeck>
            )
          })}
        </Col>
      </Row>
      <Row className='u-margin-bot-large u-text-center justify-content-center'>
        <Col xs='auto'>
          <p>
            Help out by contacting us at{' '}
            <a href='mailto:coachlawsonttf@gmail.com'>
              coachlawsonttf@gmail.com
            </a>{' '}
            or donate below:
          </p>
        </Col>
      </Row>
      <Row className='u-margin-bot-giant u-text-center justify-content-center'>
        <Col xs='12' lg='auto'>
          <Button
            buttonAsLink
            color='danger'
            href='https://www.paypal.com/donate?hosted_button_id=VMLY57KNSCXQS'>
            <span>Donate using PayPal</span>
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Support
