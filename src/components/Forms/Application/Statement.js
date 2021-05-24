import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

const Statement = ({ dispatch, message }) => {
  return (
    <Row className='u-margin-bot-tiny justify-content-center'>
      <Col xs={10}>
        <Form.Group>
          <Form.Label htmlFor='message'>
            Briefly tell us why you need our help:
          </Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            id='message'
            name='message'
            aria-label='giveAShortStatementOfNeed'
            value={message}
            onChange={e =>
              dispatch({
                type: 'SET_MESSAGE',
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

Statement.propTypes = {
  dispatch: PropTypes.func.isRequired,
  message: PropTypes.string,
}

export default Statement
