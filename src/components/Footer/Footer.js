import React from 'react'
import { Links, Notice, MailingList } from './'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  const links = [
    { url: '/contact', label: 'Contact Us' },
    { url: '/about', label: 'About Us' },
    { url: '/coach', label: 'About Coach' },
    { url: '/donate', label: 'Donate' },
    { url: '/mission', label: 'Our Mission' },
    { url: '/apply', label: 'Apply' },
  ]
  const social = [
    { url: 'hi.com', label: 'Facebook', icon: ['fab', 'facebook-square'] },
    { url: 'hi.com', label: 'Instagram', icon: ['fab', 'instagram-square'] },
    { url: 'hi.com', label: 'Twitter', icon: ['fab', 'twitter-square'] },
  ]
  const date = new Date()
  const year = date.getFullYear()
  const dates = `${'\u00A9 '}2020 - ${year}`
  return (
    <footer>
      <Row className='justify-content-sm-around'>
        <Col className='d-none d-sm-block' xs='auto'>
          <img
            className='c-footer-logo'
            src='https://mgx-photos.s3-us-west-2.amazonaws.com/lawson-ttf/Lawson_Logo_Rev_OUTLINES.png'
            alt='Logo for Coach Lawson Training and Track Foundation, LLC'
          />
        </Col>
        <Col xs={12} sm={3}>
          <Links links={links} />
        </Col>
        <Col xs={12} sm={3}>
          <Links
            links={social}
            children={
              <MailingList
                placeholder='Enter your email'
                buttonText='Submit'
                variant='success'
              />
            }
          />
        </Col>
      </Row>
      <Notice
        msg={`Coach Lawson Training and Track Foundation is a registered 501(c)(3)
          not for profit organization.`}
      />
      <Notice msg={`${dates} CLTTF. All rights reserved.`} />
    </footer>
  )
}

export default Footer
