import React, { Fragment } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function Coach() {
  const isMobile = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return true
    }
  }
  const portrait = (
    <Col key='portrait' className='u-margin-bot-giant' xs={10} md={3}>
      <Image
        src='https://mgx-photos.s3-us-west-2.amazonaws.com/lawson-ttf/121490721_787031375463284_2767173633993764345_n.jpg'
        alt='A portrait of Coach Mike Lawson'
        thumbnail
      />
    </Col>
  )
  const bio = (
    <Col key='bio' className='u-margin-bot-giant' xs={10} sm={3}>
      <Card>
        <Card.Body>
          <h1 className='u-h1'>Mike "Coach" Lawson</h1>
          <p className='u-h4 u-margin-bot-medium'>08/26/1983 - 09/22/2020</p>
          <Card.Text>
            “Coach” Mike Lawson ignited a passion for riding motorcycles at the
            age of four years old, riding a trizinger. His father passed in a
            motorcycle accident when he was just six years old. Mike rode on and
            off all his life, on dirt bikes, stunt bikes, street bikes and
            finally track. He influenced many in our riding community and was a
            mentor to many track enthusiasts. His last track day everyone
            commented he was the happiest he had ever been. Mike even came home
            and told his Mom it was THE BEST DAY EVER. Two days later at the age
            of 37 Mike died in an accident in his favorite canyon. His legacy of
            mentoring will live on in CLTTF.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
  return (
    <Fragment>
      <Row className='justify-content-center'>
        {isMobile() ? [portrait, bio] : [bio, portrait]}
      </Row>
    </Fragment>
  )
}

export default Coach
