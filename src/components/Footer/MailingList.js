import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const MailingList = ({ placeholder, buttonText, variant }) => {
  return (
    <Fragment>
      <p>Join our mailing list:</p>
      <InputGroup className='mb-3'>
        <FormControl placeholder={placeholder} aria-label={placeholder} />
        <InputGroup.Append>
          <Button variant={variant}>{buttonText}</Button>
        </InputGroup.Append>
      </InputGroup>
    </Fragment>
  )
}

MailingList.propTypes = {
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}

export default MailingList
