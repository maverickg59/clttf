import React from 'react'
import DOMPurify from 'dompurify'
import { PRIVACY_NOTICE } from './notice'

const Privacy = () => {
  function createMarkup() {
    return { __html: DOMPurify.sanitize(PRIVACY_NOTICE) }
  }
  return (
    <div
      className='u-m-s-xl u-m-b-xl'
      dangerouslySetInnerHTML={createMarkup()}
    />
  )
}

export default Privacy
