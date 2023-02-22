import { useEffect, useState } from 'react'
// material-ui
import { Box } from '@material-ui/core'
import { useStyles } from './style'
import TextFiled from '../../../../components/Dashboard/TextField'
import ResetSecurityLink from '../../../../components/Dashboard/ResetSecurityLink'

interface AuthenticatorProps {
  handleStep: (status: boolean) => void
}

function Authenticator({ handleStep }: AuthenticatorProps) {
  const classes = useStyles()
  const [isSuccess, SetIsSuccess] = useState(false)
  useEffect(() => {
    handleStep(isSuccess)
  }, [isSuccess])
  return (
    <Box mb={5}>
      <div className={classes.title}>Enable Authenticator by verifying your account</div>
      <div>
        <Box>
          <div>
            <TextFiled
              title="E-mail verification code"
              type="isButton"
              info="Enter the 6-digit code sent to ori***@gmail.com"
              error=""
              fontSize={classes.fs12}
            />
            <br />
            <TextFiled
              title="Authenticator Code"
              type="isButton"
              info="Enter the 6-digit code from Binance/Google Authenticator"
              error=""
              fontSize={classes.fs12}
            />
          </div>
          <br />
          <ResetSecurityLink />
        </Box>
      </div>
    </Box>
  )
}

export default Authenticator
