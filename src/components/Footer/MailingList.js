import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const MailingList = ({ placeholder, buttonText, variant }) => {
  const [email, setEmail] = useState('')
  const [invalid, setInvalid] = useState(true)
  const [msg, setMsg] = useState()

  const onSubmit = e => {
    const setSuccessMessage = (message, success = false) => {
      setMsg(message)
      setTimeout(() => setMsg(), 5000)
      if (success) setEmail('')
    }
    fetch('/', {
      method: 'POST',
      body: { email: email, 'form-name': 'mailing-list' },
    })
      .then(() => setSuccessMessage(`We received your submission!`, true))
      .catch(() => setSuccessMessage('Something went wrong, try again.'))
    e.preventDefault()
  }

  const onChange = e => {
    setEmail(e.target.value)
    e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      ? setInvalid(false)
      : setInvalid(true)
  }

  return (
    <Fragment>
      <p className='c-mailing-list__title'>Join our mailing list:</p>
      <form name='mailing-list' method='post'>
        <input type='hidden' name='mailing-list' value='mailing-list' />
        <InputGroup className='mb-3'>
          <FormControl
            onChange={onChange}
            value={email}
            placeholder={placeholder}
            aria-label={placeholder}
            name='email'
          />
          <InputGroup.Append>
            <Button disabled={invalid} onClick={onSubmit} variant={variant}>
              {buttonText}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
      {msg && <Badge variant='success'>{msg}</Badge>}
    </Fragment>
  )
}

MailingList.propTypes = {
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}

export default MailingList
