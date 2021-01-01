import React from 'react'
import { Links, Notice, MailingList } from './'
import { Copyright } from 'maverick-toolkit-react'
import { FOOTER_NAVIGATION_LINKS, SOCIAL_LINKS } from '../../lib'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  return (
    <footer className='c-footer bg-dark'>
      <Row className='u-padding-top-large justify-content-center justify-content-sm-around u-margin-bot-medium'>
        <Col xs={9} sm={6}>
          <MailingList
            placeholder='Enter your email'
            buttonText='Submit'
            variant='success'
          />
          <Row className='d-flex justify-content-center justify-content-sm-start flex-row flex-sm-column'>
            <Col xs='auto'>
              <Links links={FOOTER_NAVIGATION_LINKS} />
            </Col>
            <Col xs='auto'>
              <Links links={SOCIAL_LINKS} />
            </Col>
          </Row>
        </Col>
        <Col className='d-none d-sm-block' xs='auto'>
          <img
            className='c-footer-logo'
            src='https://mgx-photos.s3-us-west-2.amazonaws.com/lawson-ttf/Lawson_Logo_Rev_OUTLINES.png'
            alt='Logo for Coach Lawson Training and Track Foundation, LLC'
          />
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
