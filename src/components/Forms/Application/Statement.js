import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

const Statement = ({ dispatch, text }) => {
  return (
    <Row className='u-margin-bot-tiny justify-content-center'>
      <Col xs={10}>
        <Form.Group>
          <Form.Label htmlFor='text'>
            Briefly tell us why you need our help:
          </Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            name='text'
            id='text'
            aria-label='giveAShortStatementOfNeed'
            value={text}
            onChange={e =>
              dispatch({
                type: 'SET_TEXT',
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
  text: PropTypes.string,
}

export default Statement
