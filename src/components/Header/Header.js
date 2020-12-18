import React from 'react'
import { Button, Icon } from 'maverick-toolkit-react'
import { HEADER_NAVIGATION_LINKS } from '../../lib'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
    <Row noGutters className='sticky-top justify-content-between bg-dark'>
      <Col xs={6} sm={9}>
        <Navbar
          className='d-flex justify-content-start'
          collapseOnSelect
          expand='lg'
          bg='dark'
          variant='dark'
          role='navigation'>
          <Navbar.Toggle
            className='u-margin-right-small'
            aria-controls='responsive-navbar-nav'
          />
          <Navbar.Brand href='/'>
            <span>CLTTF</span>
          </Navbar.Brand>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              {HEADER_NAVIGATION_LINKS.map(({ url, label }) => (
                <Nav.Link key={label} eventKey={label} href={url}>
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      <Col xs='auto' className='d-flex'>
        <Button
          buttonAsLink
          color='danger'
          href='https://www.paypal.com/donate?hosted_button_id=VMLY57KNSCXQS'>
          <span>
            <Icon
              className='u-margin-right-small'
              icon='heart'
              color='#FFFFFF'
            />
            <span>Donate</span>
          </span>
        </Button>
      </Col>
    </Row>
  )
}

export default Header
