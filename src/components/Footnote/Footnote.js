import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footnote = () => {
  return (
    <Row
      id='footnote'
      className='u-padding-left-small u-margin-bot-large u-margin-top-giant'>
      <Col xs={12}>
        <span className='u-font-size-footnote'>
          Footnote [1]: Coach Lawson Training and Track Foundation is pending
          registration as a 501(c)(3) not for profit organization.{' '}
          <a href='https://www.irs.gov/charities-non-profits/charitable-organizations/contributions-to-organization-with-irs-application-pending'>
            The IRS denotes
          </a>{' '}
          that, "contributors to the organization do not have advance assurance
          of deductibility because the organization’s exemption is pending. If
          the organization ultimately qualifies for exemption for the period in
          which the contribution is made, the contribution will be
          tax-deductible by the donor. Alternatively, if the organization
          ultimately does not qualify for exemption, then the contribution will
          not be tax deductible.".
        </span>
      </Col>
    </Row>
  )
}

export default Footnote
