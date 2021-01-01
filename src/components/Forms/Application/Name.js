import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

const Name = ({ dispatch, first, last }) => {
  return (
    <Row className='justify-content-center'>
      <Col className='u-margin-bot-large' xs={10} sm={5}>
        <Form.Label htmlFor='first'>First</Form.Label>
        <Form.Group>
          <Form.Control
            className='mb-2'
            id='first'
            name='first'
            aria-label='firstName'
            placeholder='First name'
            value={first}
            onChange={e =>
              dispatch({
                type: 'SET_FIRST',
                payload: e.target.value,
                field: e.target.name,
              })
            }
            required
          />
        </Form.Group>
      </Col>
      <Col xs={10} sm={5}>
        <Form.Label htmlFor='last'>Last</Form.Label>
        <Form.Group>
          <Form.Control
            className='mb-2'
            id='last'
            name='last'
            aria-label='lastName'
            placeholder='Last name'
            value={last}
            onChange={e =>
              dispatch({
                type: 'SET_LAST',
                payload: e.target.value,
                field: e.target.name,
              })
            }
            required
          />
        </Form.Group>
      </Col>
    </Row>
  )
}

Name.propTypes = {
  dispatch: PropTypes.func.isRequired,
  first: PropTypes.string,
  last: PropTypes.string,
}

export default Name
