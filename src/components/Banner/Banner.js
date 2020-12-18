import React from 'react'
import { Image } from '../'
import { IMAGES } from '../../lib'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import cn from 'classnames'

function Banner() {
  const home = window.location.pathname === '/'
  const url = home ? IMAGES.banner.url : IMAGES.bannerAlt.url
  const alt = home ? IMAGES.banner.alt : IMAGES.bannerAlt.alt
  return (
    <Row className={'u-margin-bot-giant'}>
      <Col xs={12}>
        <Image className={cn(home ? 'c-header__banner-img' : 'c-header__banner-img--alt')} src={url} alt={alt} />
      </Col>
    </Row>
  )
}

export default Banner
