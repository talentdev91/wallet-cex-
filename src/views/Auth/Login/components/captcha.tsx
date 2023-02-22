/** @format */

import React, { useCallback, useEffect } from 'react'

import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'

import { CAPCTHA_ID } from '../../../../config/constants'

const YourReCaptchaComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available')
      return
    }
  }, [executeRecaptcha])

  useEffect(() => {
    handleReCaptchaVerify()
  }, [])

  return <button onClick={handleReCaptchaVerify}>Verify recaptcha</button>
}

export default function Captcha() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={CAPCTHA_ID}>
      <YourReCaptchaComponent />
    </GoogleReCaptchaProvider>
  )
}
