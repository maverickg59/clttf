import React from 'react'
import { Image } from '../components'

const Home = () => {
  return (
    <div>
      <Image
        className='p-home__banner-img'
        src='https://mgx-photos.s3-us-west-2.amazonaws.com/lawson-ttf/DSC_2504.jpg'
        alt='Coach Mike Lawson riding a motorcycle'
      />
    </div>
  )
}

export default Home
