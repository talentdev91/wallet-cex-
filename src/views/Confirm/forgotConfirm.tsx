import React, { useEffect, useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'
//external
import { ConfirmPassword } from '../../hooks/auth'

interface ParamsProps {
  jwtToken: string
}

function Confirm() {
  let history = useHistory()
  const { jwtToken } = useParams<ParamsProps>()
  const forgotConfirmRequest = useCallback(() => {
    const data = { params: { token: jwtToken } }
    ConfirmPassword(data).then((res: any) => {
      if (res.data.Success) {
        const data = {
          alert: true,
          openAlert: true,
          alertText: 'Password is successfully changed',
        }
        history.push('/login', data)
      } else {
        const data = {
          alert: false,
          openAlert: true,
          alertText: 'Reset password failed',
        }
        history.push('/reset-password', data)
      }
    })
  }, [history, jwtToken])

  useEffect(() => {
    if (history.location.pathname.includes('/forgot_password/confirm')) {
      forgotConfirmRequest()
    }
  }, [forgotConfirmRequest, history.location.pathname])

  return <></>
}

export default Confirm
