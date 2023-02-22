import ActionButton from 'components/Dashboard/ActionButton'
import clsx from 'clsx'
import CustomCard from 'components/Dashboard/CustomCard'
import { Link } from 'react-router-dom'
//----------------style-----------
import { useStyles } from './Style'

export default function WalletDirect() {
  const classes = useStyles()

  return (
    <CustomCard url="#" unlink>
      <div className={classes.root}>
        <i className={clsx('icon-wallet-direction', classes.icon)}></i>
        <div>
          <span className={classes.text}>
            Transfer coins or tokens between Zilionixx.com account and Zilionixx Chain Wallet.
          </span>
          <Link to="/wallet" className={classes.link}>
            <ActionButton type="gradient" className={classes.linkBtn}>
              Wallet Direction
            </ActionButton>
          </Link>
        </div>
      </div>
    </CustomCard>
  )
}
