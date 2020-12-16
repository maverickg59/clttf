import React from 'react'
import { Button, Icon } from 'maverick-toolkit-react'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  const links = [
    { label: 'Our Mission', href: '/what' },
    { label: 'Support CLTTF', href: '/support' },
    { label: 'About Us', href: '/about' },
    { label: 'About Coach', href: '/coach' },
    { label: 'Apply', href: '/apply' },
  ]
  return (
    <Row noGutters className='sticky-top'>
      <Col>
        <Navbar
          collapseOnSelect
          expand='lg'
          bg='dark'
          variant='dark'
          role='navigation'>
          <Navbar.Brand href='/'>
            <span>CLTTF</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              {links.map(({ href, label }) => (
                <Nav.Link key={label} eventKey={label} href={href}>
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      <Col xs='12' lg='auto' className='d-flex justify-content-end'>
        <Button
          buttonAsLink
          color='danger'
          href='https://www.paypal.com/donate?hosted_button_id=VMLY57KNSCXQS'>
          <span className='d-flex'>
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
