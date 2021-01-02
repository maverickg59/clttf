import React from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import cn from 'classnames'

function Notice({ className, msg, children }) {
  return (
    <Row className={cn(className, 'justify-content-center')}>
      <Col className='u-text-center' xs={10}>
        {msg ? <p className='c-footer__notice'>{msg}</p> : children}
      </Col>
    </Row>
  )
}

Notice.propTypes = {
  className: PropTypes.string,
  msg: PropTypes.string,
  children: PropTypes.node,
}

Notice.defaultProps = {
  className: '',
  msg: '',
  children: <span></span>,
}

export default Notice
