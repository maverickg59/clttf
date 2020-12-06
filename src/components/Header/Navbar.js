import React from 'react'
import cn from 'classnames'
import { Button } from '../'

const Navbar = ({ links, ulClassName, liClassName, aClassName }) => {
  const classes = cn('u-flex-row u-justify-around', ulClassName)
  return (
    <ul className={classes}>
      {links.map(({ label, href }) => {
        return (
          <li className={liClassName} key={label}>
            <Button className={aClassName} href={href}>
              {label}
            </Button>
          </li>
        )
      })}
    </ul>
  )
}

export default Navbar
