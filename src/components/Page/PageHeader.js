import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'maverick-toolkit-react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PageHeader = ({ icon = '', text, size = '5x', color = '#343a40' }) => {
  return (
    <Fragment>
      {icon && (
        <Row className='u-margin-bot-giant justify-content-center'>
          <Col xs='auto'>
            <Icon icon={icon} size={size} color={color} />
          </Col>
        </Row>
      )}
      <Row className='u-margin-bot-giant justify-content-center'>
        <Col xs='auto'>
          <h1 className='u-h2'>{text}</h1>
        </Col>
      </Row>
    </Fragment>
  )
}

PageHeader.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
}

export default PageHeader
