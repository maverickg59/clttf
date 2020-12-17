import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const MailingList = ({ placeholder, buttonText, variant }) => {
  return (
    <Fragment>
      <p className='c-mailing-list__title'>Join our mailing list:</p>
      <form name='mailing-list' method='post'>
        <input type='hidden' name='mailing-list' value='mailing-list' />
        <InputGroup className='mb-3'>
          <FormControl
            placeholder={placeholder}
            aria-label={placeholder}
            name='email'
          />
          <InputGroup.Append>
            <Button type='submit' variant={variant}>
              {buttonText}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
    </Fragment>
  )
}

MailingList.propTypes = {
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}

export default MailingList
