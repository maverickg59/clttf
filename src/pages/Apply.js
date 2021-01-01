import React, { Fragment } from 'react'
import { PageHeader, Application } from '../components'

const Apply = () => {
  return (
    <Fragment>
      <PageHeader text='Apply for a scholarship.' icon='clipboard-list' />
      <Application />
    </Fragment>
  )
}

export default Apply
