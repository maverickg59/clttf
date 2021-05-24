import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import cn from 'classnames'

const MailingList = ({ placeholder, buttonText, variant }) => {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const setNotification = str => {
    setMsg(str)
    setTimeout(() => setMsg(), 3000)
  }

  async function submitResponse() {
    try {
      const { status } = await axios.post('/api/mailing', { email })
      if (status === 200) {
        setNotification('We received your submission!')
      }
    } catch ({ request, response }) {
      if (request || response) {
        setNotification('Something went wrong, please try again.')
      }
    }
  }

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const handleKeyPress = e => {
    if (e.charCode === 13) {
      e.preventDefault()
      submitResponse(e)
    }
  }

  const handleClick = e => submitResponse()

  return (
    <Fragment>
      <p className='c-mailing-list__title'>Join our mailing list:</p>
      <form
        className={cn({
          'u-margin-bot-large': !msg,
          'u-margin-bot-small': msg,
        })}>
        <input type='hidden' name='mailing-list' value='mailing-list' />
        <InputGroup className='mb-3'>
          <FormControl
            type='email'
            onChange={handleChange}
            value={email}
            placeholder={placeholder}
            aria-label={placeholder}
            onKeyPress={handleKeyPress}
            name='email'
          />
          <InputGroup.Append>
            <Button onClick={handleClick} variant={variant}>
              {buttonText}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
      {msg && (
        <div className='u-margin-bot-small c-footer__mailing-list-badge'>
          <Badge variant='success'>{msg}</Badge>
        </div>
      )}
    </Fragment>
  )
}

MailingList.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}

export default MailingList
