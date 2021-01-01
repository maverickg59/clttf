import React, { useReducer } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { Name, Contact, Needs, Statement } from './'

const Application = () => {
  function reducer(state, { type, payload, field }) {
    switch (type) {
      case 'SET_FIRST':
      case 'SET_LAST':
      case 'SET_EMAIL':
      case 'SET_AREA':
      case 'SET_OFFICE':
      case 'SET_SUBSCRIBER':
      case 'SET_YEARS':
      case 'SET_TEXT':
      case 'SET_MESSAGE':
      case 'TOGGLE_EQUIPMENT':
      case 'TOGGLE_TRAINING':
        return { ...state, [field]: payload }
      default:
        return state
    }
  }
  const initialState = {
    first: '',
    last: '',
    email: '',
    area: '',
    office: '',
    subscriber: '',
    years: 0,
    equipment: false,
    training: false,
    text: '',
    message: '',
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const {
    first,
    last,
    email,
    area,
    office,
    subscriber,
    years,
    equipment,
    training,
    text,
    message,
  } = state

  //   const encode = data => {
  //     return Object.keys(data)
  //       .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
  //       .join('&')
  //   }

  //   const onSubmit = e => {
  //     const setSuccessMessage = message => {
  //       dispatch({ type: 'SET_MESSAGE', payload: message, field: 'message' })
  //       setTimeout(
  //         () => dispatch({ type: 'SET_MESSAGE', payload: '', field: 'message' }),
  //         5000
  //       )
  //     }
  //     fetch('/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //       body: encode({
  //         first,
  //         last,
  //         email,
  //         area,
  //         office,
  //         subscriber,
  //         years,
  //         equipment,
  //         training,
  //         text,
  //         'form-name': 'application',
  //       }),
  //     })
  //       .then(() => setSuccessMessage(`We received your submission!`, true))
  //       .catch(() => setSuccessMessage('Something went wrong, try again.'))
  //     e.preventDefault()
  //   }

  return (
    <Form className='u-margin-bot-giant' name='apply'>
      <input type='hidden' name='apply' value='apply' />
      <Name dispatch={dispatch} first={first} last={last} />
      <Contact
        dispatch={dispatch}
        email={email}
        area={area}
        office={office}
        subscriber={subscriber}
      />
      <Needs
        dispatch={dispatch}
        years={years}
        equipment={equipment}
        training={training}
      />
      <Statement dispatch={dispatch} text={text} />
      <Row className='justify-content-center'>
        <Col xs={10}>
          <Button variant='dark' type='submit'>
            Submit
          </Button>
        </Col>
      </Row>
      {message && (
        <div className='c-footer__mailing-list-badge'>
          <Badge variant='success'>{message}</Badge>
        </div>
      )}
    </Form>
  )
}

Application.propTypes = {}

export default Application
