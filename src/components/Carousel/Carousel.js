import React from 'react'
import PropTypes from 'prop-types'
import { default as BSCarousel } from 'react-bootstrap/Carousel'

const Carousel = ({ links, className, imgClassName }) => {
  return (
    <div className={className}>
      <BSCarousel>
        {links.map(({ url }) => (
          <BSCarousel.Item>
            <img
              className='d-block w-100'
              src={url}
              alt='Mike Lawson riding a motorcycle'
            />
            <BSCarousel.Caption>
              <img
                className={imgClassName}
                src='https://mgx-photos.s3-us-west-2.amazonaws.com/lawson-ttf/Lawson_Logo_Rev_OUTLINES.png'
                alt='Coach Lawson Training and Track Foundation'
              />
            </BSCarousel.Caption>
          </BSCarousel.Item>
        ))}
      </BSCarousel>
    </div>
  )
}

Carousel.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
}

export default Carousel
