import { useEffect, useState } from 'react'

function useFacebookLink() {
  const [fbLink, setFbLink] = useState(
    'https://facebook.com/Coach-Lawson-Training-and-Track-Foundation-102960111692089/',
  )

  useEffect(() => {
    // Check if the user is on a mobile device
    const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    if (isMobileDevice) {
      setFbLink('fb://page/102960111692089')
    }
  }, [])

  return fbLink
}

export default useFacebookLink
