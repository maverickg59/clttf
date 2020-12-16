import React from 'react'
import { Links, Notice, MailingList } from './'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  const links = [
    { url: '/mission', label: 'Mission Statement' },
    { url: '/support', label: 'Support CLTTF' },
    { url: '/about', label: 'About Us' },
    { url: '/coach', label: 'About Coach' },
    { url: '/contact', label: 'Contact Us' },
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
    <footer className='u-margin-top-giant'>
      <Row className='justify-content-sm-center u-margin-bot-large'>
        <Col className='d-none d-sm-block' xs='auto'>
          <img
            className='c-footer-logo'
            src='https://mgx-photos.s3-us-west-2.amazonaws.com/lawson-ttf/Lawson_Logo_Rev_OUTLINES.png'
            alt='Logo for Coach Lawson Training and Track Foundation, LLC'
          />
        </Col>
        <Col xs={12} sm={{ span: 'auto', offset: 1 }}>
          <p className='c-footer__section-title'>Links</p>
          <Links links={links} />
        </Col>
        <Col xs={12} sm={{ span: 4, offset: 1 }}>
          <MailingList
            placeholder='Enter your email'
            buttonText='Submit'
            variant='success'
          />
        </Col>
        <Col xs={12} sm={{ span: 'auto', offset: 1 }}>
          <p className='c-footer__section-title'>Social</p>
          <Links links={social} />
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
