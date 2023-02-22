import { useState } from 'react'
import clsx from 'clsx'
// material-ui
import { Box } from '@material-ui/core'
import { useStyles } from './style'
import TabMenu from '../../../../components/Dashboard/TabMenu'
import Qrcode from 'assets/image/onlink_to_m99hv3.svg'

function DownloadApp() {
  const classes = useStyles()
  const tabs = ['Binance Authenticator', 'Google Authenticator']
  const [tabKey, setTabKey] = useState(tabs[0])

  const handleClickTab = (tab: string) => {
    setTabKey(tab)
  }

  return (
    <Box>
      <div className={classes.title}>Download and install the Authenticator app</div>
      <div>
        <TabMenu tabs={tabs} tabKey={tabKey} handleClickTab={handleClickTab} className={classes.tabMenuVisible} />
        {tabKey === tabs[0] ? (
          <div>
            <Box className={classes.content}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://apps.apple.com/cn/app/bauthenticator/id1575861279"
                className={classes.linkBtn}
              >
                <i className={clsx(classes.fs24, 'icon-apple')}></i>
                <div>App Store</div>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ftp.binance.com/authenticator/binance-authenticator.apk"
                className={classes.linkBtn}
              >
                <i className={clsx(classes.fs24, 'icon-android')}></i>
                <div>Android APK</div>
              </a>
            </Box>
            <Box className={classes.content}>
              <div className={classes.qrcode}>
                <img src={Qrcode} alt="alt" />
              </div>
              <div className={classes.qrcodeText}>
                <span className={classes.txt}>Scan to download</span>
                <span className={classes.txtdisable}>iOS & Android</span>
              </div>
            </Box>
            <Box className={classes.content}>
              <i className={clsx(classes.icondisable, 'icon-note')}></i>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.binance.com/en/support/faq/115000433432"
                className={classes.linkTxt}
              >
                How to set up Binance/Google Authenticator
              </a>
            </Box>
          </div>
        ) : (
          <div>
            <Box className={classes.content}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8"
                className={classes.linkBtnLarge}
              >
                <i className={clsx(classes.fs32, 'icon-apple')}></i>
                <div>
                  <div className={classes.txtdisablelarge}>Download from</div>
                  <div>App Store</div>
                </div>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
                className={classes.linkBtnLarge}
              >
                <i className={clsx(classes.fs32, 'icon-google-play')}></i>
                <div>
                  <div className={classes.txtdisablelarge}>Download from</div>
                  <div>Android APK</div>
                </div>
              </a>
            </Box>
            <Box className={classes.content}>
              <i className={clsx(classes.icondisable, 'icon-note')}></i>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.binance.com/en/support/faq/115000433432"
                className={classes.linkTxt}
              >
                How to set up Binance/Google Authenticator
              </a>
            </Box>
          </div>
        )}
      </div>
    </Box>
  )
}

export default DownloadApp
