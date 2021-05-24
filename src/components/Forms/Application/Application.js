import React, { useReducer, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { Name, Contact, Needs, Statement } from './'

const Application = () => {
  const [msg, setMsg] = useState()
  function reducer(state, { type, payload, field }) {
    switch (type) {
      case 'SET_FIRST':
      case 'SET_LAST':
      case 'SET_EMAIL':
      case 'SET_PHONE':
      case 'SET_YEARS':
      case 'SET_MESSAGE':
      case 'TOGGLE_EQUIPMENT':
      case 'TOGGLE_TRAINING':
        return { ...state, [field]: payload }
      default:
        return Statement
    }
  }
  const initialState = {
    first: '',
    last: '',
    email: '',
    phone: '',
    years: '0',
    message: '',
    equipment: false,
    training: false,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const { first, last, email, phone, years, message, equipment, training } =
    state

  const setNotification = str => {
    setMsg(str)
    setTimeout(() => setMsg(), 3000)
  }

  async function submitResponse() {
    try {
      const { status } = await axios.post('/api/application', state)
      if (status === 200) {
        setNotification('We received your submission!')
      }
    } catch ({ request, response }) {
      if (request || response) {
        setNotification('Something went wrong, please try again.')
      }
    }
  }

  const handleKeyPress = e => {
    if (e.charCode === 13) {
      e.preventDefault()
      submitResponse()
    }
  }
  const handleClick = () => submitResponse()

  return (
    <Form className='u-margin-bot-giant'>
      <Name dispatch={dispatch} first={first} last={last} />
      <Contact dispatch={dispatch} email={email} area={phone} />
      <Needs
        dispatch={dispatch}
        years={years}
        equipment={equipment}
        training={training}
      />
      <Statement dispatch={dispatch} message={message} />
      <Row className='justify-content-center'>
        <Col xs={10}>
          <Button
            onKeyPress={handleKeyPress}
            onClick={handleClick}
            variant='dark'>
            Submit
          </Button>
          {msg && (
            <div className='c-footer__mailing-list-badge'>
              <Badge variant='success'>{msg}</Badge>
            </div>
          )}
        </Col>
      </Row>
    </Form>
  )
}

Application.propTypes = {}

export default Application
