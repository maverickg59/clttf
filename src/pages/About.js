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
      <Row className='u-margin-bot-medium justify-content-center'>
        <Col xs={11} sm={10}>
          {section.cards.map((row, i) => {
            return (
              <CardDeck key={row[i].title} className='justify-content-center'>
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
                              <Card.Subtitle className='mb-2'>
                                {title}
                              </Card.Subtitle>
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
