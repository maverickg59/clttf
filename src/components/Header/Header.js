import React from 'react'
import { Button, Icon } from 'maverick-toolkit-react'
import { HEADER_NAVIGATION_LINKS, HEADER_BUTTON_LINKS } from '../../lib'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
    <header className='c-header w-100 position-fixed'>
      <Navbar
        className='d-flex'
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        role='navigation'>
        <Navbar.Toggle
          className='c-header__navbar-togggle u-margin-right-small'
          aria-controls='responsive-navbar-nav'
        />
        <Navbar.Brand className='c-header__navbar-navbrand' href='/'>
          <span>CLTTF</span>
        </Navbar.Brand>
        <Navbar.Collapse
          className='justify-content-between'
          id='responsive-navbar-nav'>
          <Nav className='mr-auto c-header__navbar-navblock'>
            {HEADER_NAVIGATION_LINKS.map(({ url, label }) => (
              <Nav.Link key={label} eventKey={label} href={url}>
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            {HEADER_BUTTON_LINKS.map(({ url, label, icon }) => (
              <Button buttonAsLink color='danger' href={url}>
                <Icon
                  className='u-margin-right-small'
                  icon={icon}
                  color='#FFFFFF'
                />
                <span>{label}</span>
              </Button>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
