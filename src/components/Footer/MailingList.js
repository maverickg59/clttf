import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const MailingList = ({ placeholder, buttonText, variant }) => {
  return (
    <Fragment>
      <p className='c-mailing-list__title'>Join our mailing list:</p>
      <form netlify id='f-mailing-list'>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder={placeholder}
            aria-label={placeholder}
            form='f-mailing-list'
          />
          <InputGroup.Append>
            <Button variant={variant}>{buttonText}</Button>
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
