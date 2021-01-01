import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

const Contact = ({ dispatch, email, area, office, subscriber }) => {
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
        <Form.Label htmlFor='phone'>Phone</Form.Label>
        <Form.Group id='phone'>
          <Row>
            <Col xs={3}>
              <Form.Control
                type='tel'
                maxLength='3'
                className='mb-2'
                id='area'
                name='area'
                aria-label='areaCode'
                placeholder='555'
                value={area}
                onChange={e =>
                  dispatch({
                    type: 'SET_AREA',
                    payload: e.target.value,
                    field: e.target.name,
                  })
                }
                required
              />
            </Col>
            {` - `}
            <Col xs={3}>
              <Form.Control
                type='tel'
                maxLength='3'
                className='mb-2'
                id='office'
                name='office'
                aria-label='threeDigitCentralOfficeCodeNumber'
                placeholder='555'
                value={office}
                onChange={e =>
                  dispatch({
                    type: 'SET_OFFICE',
                    payload: e.target.value,
                    field: e.target.name,
                  })
                }
                required
              />
            </Col>
            {` - `}
            <Col xs={4}>
              <Form.Control
                type='tel'
                maxLength='4'
                className='mb-2'
                id='subscriber'
                name='subscriber'
                aria-label='fourDigitSubscriberNumber'
                placeholder='5555'
                value={subscriber}
                onChange={e =>
                  dispatch({
                    type: 'SET_SUBSCRIBER',
                    payload: e.target.value,
                    field: e.target.name,
                  })
                }
                required
              />
            </Col>
          </Row>
        </Form.Group>
      </Col>
    </Row>
  )
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
  email: PropTypes.string,
  area: PropTypes.string,
  office: PropTypes.string,
  subscriber: PropTypes.string,
}

export default Contact
