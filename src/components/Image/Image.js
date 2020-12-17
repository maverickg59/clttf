import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

function Image({ className, src, alt }) {
  console.log('image is rendered')
  const classes = cn(className, 'c-img')
  return <img className={classes} src={src} alt={alt} />
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

Image.defaultProps = {
  className: '',
}

export default Image
