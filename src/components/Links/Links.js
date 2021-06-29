import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'maverick-toolkit-react'
import cn from 'classnames'

const Links = ({
  className,
  color,
  children,
  links,
  linkTheme,
  useAltIcon,
}) => {
  return (
    <Fragment>
      <ul className={cn(className, 'd-flex flex-column flex-sm-row w-100')}>
        {links.map(({ url, label, icon, altIcon }, i) => (
          <Fragment key={label}>
            <li className='c-link__list-item'>
              <Button href={url} color={`link-${linkTheme}`}>
                {icon && (
                  <Icon
                    icon={useAltIcon ? altIcon : icon}
                    color={color}
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
  color: PropTypes.string,
  children: PropTypes.node,
  links: PropTypes.array.isRequired,
  linktheme: PropTypes.string.isRequired,
  useAltIcon: PropTypes.bool,
}

Links.defaultProps = {
  className: '',
  color: '',
  children: <Fragment />,
  useAltIcon: false,
}

export default Links
