import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'maverick-toolkit-react'
import cn from 'classnames'

const Links = ({ children, links }) => {
  return (
    <Fragment>
      <ul className='d-flex flex-column'>
        {links.map(({ url, label, icon }) => (
          <li className={cn({ 'u-text-center': !icon })} key={label}>
            <Button href={url} color='link-light'>
              {icon && (
                <Icon
                  icon={icon}
                  color='#FFFFFF'
                  className='u-margin-right-small'
                />
              )}
              {label}
            </Button>
          </li>
        ))}
      </ul>
      {children && children}
    </Fragment>
  )
}

Links.propTypes = {
  links: PropTypes.array.isRequired,
  children: PropTypes.node,
}

export default Links
