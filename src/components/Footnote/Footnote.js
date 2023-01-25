import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footnote = ({ note }) => {
  return (
    <Row
      id='footnote'
      className='u-padding-left-small u-margin-bot-large u-margin-top-giant'>
      <Col xs={12}>
        <span className='u-font-size-footnote'>{note}</span>
      </Col>
    </Row>
  )
}

export default Footnote
