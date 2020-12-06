import React from 'react'
import Navbar from './Navbar'
import CTABar from './CTABar'

const Header = () => {
  const links = [
    { label: 'CLTTF', href: '/home' },
    { label: 'About Us', href: '/about' },
    { label: 'What We Do', href: '/what' },
    { label: 'Support CLTTF', href: '/support' },
    { label: 'Apply', href: '/apply' },
  ]
  return (
    <header>
      <CTABar />
      <Navbar links={links} />
    </header>
  )
}

export default Header
