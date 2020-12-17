import React from 'react'
import { Links, Notice, MailingList } from './'
import { Copyright } from 'maverick-toolkit-react'
import { FOOTER_NAVIGATION_LINKS, SOCIAL_LINKS } from '../../lib'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
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
          <Links links={FOOTER_NAVIGATION_LINKS} />
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
          <Links links={SOCIAL_LINKS} />
        </Col>
      </Row>
      <Notice
        msg={`Coach Lawson Training and Track Foundation is pending registration as a 501(c)(3)
          not for profit organization.`}
      />
      <Notice
        children={
          <Copyright
            className='c-footer__notice'
            entity='CLTTF'
            established={2020}
          />
        }
      />
    </footer>
  )
}

export default Footer
