import React, { useEffect, useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'
// external
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'
import { ConfirmRegister } from '../../hooks/auth'

interface ParamsProps {
  jwtToken: string
}

function Confirm() {
  let history = useHistory()
  const dispatch = useAppDispatch()
  const { jwtToken } = useParams<ParamsProps>()

  const registerConfirmRequest = useCallback(() => {
    const data = { params: { token: jwtToken } }
    ConfirmRegister(data).then((res: any) => {
      if (res.data.Success) {
        dispatch(showAlert({ message: 'Email verification success', severity: 'success' }))
        history.push('/login', data)
      } else {
        dispatch(showAlert({ message: 'Email verification failed', severity: 'error' }))
        history.push('/register', data)
      }
    })
  }, [history, jwtToken])

  useEffect(() => {
    if (history.location.pathname.includes('/register/confirm')) {
      registerConfirmRequest()
    }
  }, [registerConfirmRequest, history.location.pathname])

  return <> </>
}

export default Confirm
