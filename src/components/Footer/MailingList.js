import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
// import Badge from 'react-bootstrap/Badge'
// import cn from 'classnames'

const MailingList = ({ placeholder, buttonText, variant }) => {
  const [email, setEmail] = useState('')

  async function submit() {
    const url = 'https://git.heroku.com/clttf.git/api/users'
    // const local = 'http://localhost:5000/api/users'
    const data = {
      name: 'wtfrig',
      email: 'email@gmail.com',
      password: '234567',
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    }
    try {
      const response = await axios.post(url, data, config)
      console.log(response)
    } catch (error) {
      if (error.request) {
        console.log(error.request)
      }
      if (error.response) {
        console.log(error.response)
      }
      console.log(error)
    }
  }

  const onChange = e => {
    setEmail(e.target.value)
  }

  const onKeyPress = e => {
    if (e.charCode === 13) {
      submit(e)
    }
  }

  return (
    <Fragment>
      <p className='c-mailing-list__title'>Join our mailing list:</p>
      <form
        // className={cn({
        //   'u-margin-bot-large': !msg,
        //   'u-margin-bot-small': msg,
        // })}
        name='mailing-list'>
        <input type='hidden' name='mailing-list' value='mailing-list' />
        <InputGroup className='mb-3'>
          <FormControl
            type='email'
            onChange={onChange}
            value={email}
            placeholder={placeholder}
            aria-label={placeholder}
            onKeyPress={onKeyPress}
            name='email'
          />
          <InputGroup.Append>
            <Button onClick={() => submit()} variant={variant}>
              {buttonText}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
      {/* {msg && (
        <div className='u-margin-bot-small c-footer__mailing-list-badge'>
          <Badge variant='success'>{msg}</Badge>
        </div>
      )} */}
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
