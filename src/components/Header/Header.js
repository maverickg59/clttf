import React from 'react'
import { Button, Icon } from 'maverick-toolkit-react'
import { HEADER_NAVIGATION_LINKS } from '../../lib'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
    <header className='sticky-top'>
      <Navbar
        className='d-flex w-100 justify-content-start'
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
      <Button
        className='c-donate'
        buttonAsLink
        color='danger'
        href='https://www.paypal.com/donate?hosted_button_id=VMLY57KNSCXQS'>
        <span>
          <Icon className='u-margin-right-small' icon='heart' color='#FFFFFF' />
          <span>Donate</span>
        </span>
      </Button>
    </header>
  )
}

export default Header
