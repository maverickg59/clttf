import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

const Needs = ({ dispatch, years, equipment, training }) => {
  const yrsRiding = () => {
    const options = []
    for (let i = 0; i < 50; i++) {
      options.push(
        <option key={`${Math.random().toString(36).substring(7)}${i}`}>
          {i}
        </option>
      )
    }
    return options
  }

  return (
    <Row className='justify-content-center'>
      <Col xs={12} sm={10}>
        <Row>
          <Col xs={12} sm='auto'>
            <Form.Group id='needs'>
              <Row className='u-margin-bot-giant'>
                <Col xs='auto'>
                  <Form.Label htmlFor='needs'>I've been riding</Form.Label>
                </Col>
                <Col xs='auto'>
                  <Form.Control
                    id='years-riding'
                    name='years'
                    as='select'
                    aria-label='numberOfYearsRiding'
                    value={years}
                    onChange={e => {
                      dispatch({
                        type: 'SET_YEARS',
                        payload: e.target.value,
                        field: e.target.name,
                      })
                    }}>
                    {yrsRiding()}
                  </Form.Control>
                </Col>
                <Col xs='auto'>
                  <Form.Label htmlFor='years'>years.</Form.Label>
                </Col>
              </Row>
            </Form.Group>
          </Col>
          <Col xs={12} sm='auto'>
            <Row>
              <Col xs='auto'>
                <Form.Label htmlFor='assistance'>
                  I need assistance with the following:
                </Form.Label>
              </Col>
            </Row>
          </Col>
          <Col className='u-margin-bot-large' xs={12} sm='auto'>
            <Form.Group id='assistance'>
              <Row>
                <Col xs='auto'>
                  <Form.Check
                    type='checkbox'
                    label='safety equipment'
                    id='equipment'
                    aria-label='checkIfYouNeedSafetyEquipment'
                    value={equipment}
                    name='equipment'
                    onChange={e =>
                      dispatch({
                        type: 'TOGGLE_EQUIPMENT',
                        payload: !equipment,
                        field: e.target.name,
                      })
                    }
                  />
                </Col>
                <Col xs='auto'>
                  <Form.Check
                    type='checkbox'
                    label='rider training'
                    id='training'
                    aria-label='checkIfYouNeedTrainingCourses'
                    value={training}
                    name='training'
                    onChange={e =>
                      dispatch({
                        type: 'TOGGLE_TRAINING',
                        payload: !training,
                        field: e.target.name,
                      })
                    }
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

Needs.propTypes = {
  dispatch: PropTypes.func.isRequired,
  years: PropTypes.string,
  equipment: PropTypes.bool,
  training: PropTypes.bool,
}

export default Needs
