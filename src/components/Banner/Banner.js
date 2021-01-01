import React from 'react'
import { Image } from '../'
import { IMAGES } from '../../lib'
import Row from 'react-bootstrap/Row'
import cn from 'classnames'

function Banner() {
  const home = window.location.pathname === '/'
  const url = home ? IMAGES.banner.url : IMAGES.bannerAlt.url
  const alt = home ? IMAGES.banner.alt : IMAGES.bannerAlt.alt
  return (
    <Row className={'u-margin-bot-giant'}>
      <Image
        className={cn(
          home ? 'c-header__banner-img' : 'c-header__banner-img--alt'
        )}
        src={url}
        alt={alt}
      />
    </Row>
  )
}

export default Banner
