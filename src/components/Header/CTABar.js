import React, { Fragment } from 'react'
import { Button, Icon } from '../'

const CTABar = () => {
  const children = (
    <Fragment>
      <Icon icon='heart' />
      <span> Donate</span>
    </Fragment>
  )
  return <Button>{children}</Button>
}

export default CTABar
