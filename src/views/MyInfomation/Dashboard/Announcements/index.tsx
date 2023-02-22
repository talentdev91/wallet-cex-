import CustomCard from 'components/Dashboard/CustomCard'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
//----------------style-----------
import { useStyles } from './Style'

interface CustomLinkProps {
  text: string
  date: string
  link: string
  classes: any
  className?: any
}
function CustomLink({ text, date, classes, className, link }: CustomLinkProps) {
  return (
    <Link to={link} className={clsx(classes.link, className)}>
      <div className={classes.text}>{text}</div>
      <div className={classes.date}>{date}</div>
    </Link>
  )
}

export default function Announcements() {
  const classes = useStyles()

  return (
    <CustomCard title="Announcements" url="#">
      {/* <CustomLink
        link="/support/announcement/d24dd195b58842e98bbb521ba06e9a97"
        classes={classes}
        className={classes.borderBottom}
        text="Zilionixx P2P Special Year End Promotion - Asia Pacific Edition: 5 Days of Mega Rewards"
        date="2021-12-17"
      ></CustomLink>
      <CustomLink
        link="/support/announcement/b3fec0e9a61d4a60b0e489b8b3e75c4f"
        classes={classes}
        text="Zilionixx Concludes 3 Promos: DOCK Task Promo, MDX Thank You Week, and NFT Thank You Week"
        date="2021-12-17"
      ></CustomLink> */}
    </CustomCard>
  )
}
