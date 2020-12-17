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
  const path = window.location.pathname

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const onSubmit = e => {
    const setSuccessMessage = (message, success = false) => {
      setMsg(message)
      setTimeout(() => setMsg(), 5000)
      if (success) setEmail('')
    }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ email: email, 'form-name': 'mailing-list' }),
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
      <form name='mailing-list' action={path}>
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
      {msg && (
        <div className='c-footer__mailing-list-badge'>
          <Badge variant='success'>{msg}</Badge>
        </div>
      )}
    </Fragment>
  )
}

MailingList.propTypes = {
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}

export default MailingList
