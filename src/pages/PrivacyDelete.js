import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PrivacyDelete = () => {
  return (
    <Row className='c-privacy__delete u-margin-bot-large u-text-center justify-content-center'>
      <Col className='c-privacy__delete-container' xs='auto'>
        <p>
          We're happy to delete your data. Please send a short email to{' '}
          <span>
            <a href='mailto:coachlawsonttf@gmail.com'>
              coachlawsonttf@gmail.com
            </a>
          </span>{' '}
          asking to have your information deleted.
        </p>
      </Col>
    </Row>
  )
}

export default PrivacyDelete
