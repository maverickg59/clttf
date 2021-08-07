import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footnote = () => {
  return (
    <Row
      id='footnote'
      className='u-padding-left-small u-margin-bot-large u-margin-top-giant'>
      <Col xs={12}>
        <span className='u-font-size-footnote'>
          Footnote [1]: Coach Lawson Training and Track Foundation is a
          501(c)(3) not for profit organization.
        </span>
      </Col>
    </Row>
  )
}

export default Footnote
