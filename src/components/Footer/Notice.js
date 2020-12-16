import React from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Notice({ msg }) {
  return (
    <Row className='justify-content-md-center'>
      <Col xs='auto'>
        <p className='c-footer__notice'>{msg}</p>
      </Col>
    </Row>
  )
}

Notice.propTypes = {
  msg: PropTypes.string.isRequired,
}

export default Notice
