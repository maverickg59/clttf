import React from 'react'
import { Links, Notice, MailingList } from './'
import { Copyright, Button } from 'maverick-toolkit-react'
import { FOOTER_NAVIGATION_LINKS, SOCIAL_LINKS } from '../../lib'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  return (
    <footer className='c-footer bg-dark'>
      <Row className='u-padding-top-large justify-content-center justify-content-sm-around u-margin-bot-medium'>
        <Col xs={12} sm={7}>
          <Row className='u-padding-bot-small justify-content-center justify-content-sm-start'>
            <Col xs={10}>
              <MailingList
                placeholder='Enter your email'
                buttonText='Submit'
                variant='success'
              />
            </Col>
          </Row>
          <Row className='d-flex justify-content-between justify-content-sm-start flex-row flex-sm-column'>
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
        className='u-margin-bot-large'
        children={
          <Copyright
            className='c-footer__notice'
            entity='CLTTF'
            established={2020}
          />
        }
      />
      <Notice
        children={
          <p className='c-footer__notice'>
            The creation and maintenance of this site is provided free of charge
            by
            <span>
              <Button
                className='c-footer__notice c-footer__notice-link u-text-bold u-margin-left-tiny'
                href='https://chriswhite.rocks'
                color='link-light'>
                chriswhite.rocks
              </Button>
            </span>
          </p>
        }
      />
    </footer>
  )
}

export default Footer
