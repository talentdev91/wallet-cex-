import Card from '@material-ui/core/Card'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Link } from 'react-router-dom'
//----------------style-----------
import { useStyles } from './Style'

interface CustomCardProps {
  title?: string
  desc?: React.ReactNode
  desc1?: React.ReactNode
  url: string
  children?: React.ReactNode
  unlink?: boolean | false
}
function CustomCard({ title, desc, desc1, url, children, unlink }: CustomCardProps) {
  const classes = useStyles()

  return (
    <Card className={classes.cardRoot}>
      {!unlink && (
        <div className={classes.cardHeader}>
          <div className={classes.headerTitle}>
            <Link to={url} className={classes.titleName}>
              {title}
            </Link>
            <div className={classes.titleMore}>{desc1}</div>
          </div>
          <div className={classes.headerDescription}>
            <div className={classes.descriptionMore}>{desc}</div>
            <Link to={url}>
              <ArrowForwardIosIcon className={classes.descriptionIcon} />
            </Link>
          </div>
        </div>
      )}
      <div>{children}</div>
    </Card>
  )
}
export default CustomCard
