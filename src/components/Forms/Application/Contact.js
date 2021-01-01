import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

const Contact = ({ dispatch, email, phone }) => {
  return (
    <Row className='justify-content-center'>
      <Col className='u-margin-bot-large' xs={10} sm={5}>
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Group>
          <Form.Control
            type='email'
            id='email'
            name='email'
            aria-label='enterEmail'
            placeholder='Enter your email'
            value={email}
            onChange={e =>
              dispatch({
                type: 'SET_EMAIL',
                payload: e.target.value,
                field: e.target.name,
              })
            }
            required
            autoComplete='true'
          />
        </Form.Group>
      </Col>
      <Col className='u-margin-bot-large' xs={10} sm={5}>
        <Form.Label htmlFor='phoneNum'>Phone</Form.Label>
        <Form.Group id='phoneNum'>
          <Form.Control
            type='tel'
            maxLength='16'
            className='mb-2'
            id='phone'
            name='phone'
            aria-label='areaCode'
            placeholder='(555) 555-5555'
            value={phone}
            onChange={e =>
              dispatch({
                type: 'SET_PHONE',
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

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
}

export default Contact
