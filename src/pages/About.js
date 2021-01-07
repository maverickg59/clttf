import React, { Fragment } from 'react'
import { PageHeader } from '../components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { ABOUT_PAGE } from '../lib'

function About() {
  const { section } = ABOUT_PAGE
  return (
    <Fragment>
      <PageHeader text={section.title} />
      <Row className='u-margin-bot-giant justify-content-center'>
        <Col xs={11} sm={10}>
          {section.cards.map((row, i) => {
            return (
              <CardDeck
                key={`${Math.random().toString(36).substring(7)}${i}`}
                className='justify-content-center'>
                {row.map(({ name, title, text }) => {
                  return (
                    <Col key={name} xs={12} sm={5}>
                      <div className='u-margin-bot-giant'>
                        <Card>
                          <Card.Body>
                            {name && (
                              <Card.Title className='mb-3'>{name}</Card.Title>
                            )}
                            {title && (
                              <p className='u-h4 u-margin-bot-small'>{title}</p>
                            )}
                            {text && <Card.Text>{text}</Card.Text>}
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
    </Fragment>
  )
}

export default About
