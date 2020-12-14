import React from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Notice({ msg }) {
  return (
    <Row className='justify-content-md-center'>
      <Col xs='auto' sm='auto' md='auto' lg='auto' xl='auto'>
        <p>{msg}</p>
      </Col>
    </Row>
  )
}

Notice.propTypes = {
  msg: PropTypes.string.isRequired,
}

export default Notice
