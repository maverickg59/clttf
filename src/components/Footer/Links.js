import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'maverick-toolkit-react'
import cn from 'classnames'

const Links = ({ className, children, links }) => {
  return (
    <Fragment>
      <ul className={cn(className, 'd-flex flex-column flex-sm-row')}>
        {links.map(({ url, label, icon }, i) => (
          <Fragment key={label}>
            <li className='c-footer__link'>
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
            {i !== links.length - 1 && (
              <span className='d-none d-sm-block'>|</span>
            )}
          </Fragment>
        ))}
      </ul>
      {children && children}
    </Fragment>
  )
}

Links.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array.isRequired,
  children: PropTypes.node,
}

export default Links
