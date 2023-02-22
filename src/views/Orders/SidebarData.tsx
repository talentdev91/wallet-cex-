import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded'
export const SidebarData = [
  {
    title: 'Spot Order',
    path: '',
    icon: <i className={'icon-spot-order'} />,
    iconClosed: <ArrowDropDownRoundedIcon />,
    iconOpened: <ArrowDropUpRoundedIcon />,
    number: '1',
    subNav: [
      {
        title: 'Open Orders',
        path: '/my/orders/exchange/openorder',
        parentKey: '1',
        ownKey: '5',
      },
      {
        title: 'Order History',
        path: '/my/orders/exchange/tradeorder',
        parentKey: '1',
        ownKey: '6',
      },
      {
        title: 'Trade History',
        path: '/my/orders/exchange/usertrade',
        parentKey: '1',
        ownKey: '7',
      },
    ],
  },
  {
    title: 'P2P order',
    path: '/my/orders/exchange/p2p-order',
    icon: <i className={'icon-p2p-order'} />,
    iconClosed: <ArrowDropDownRoundedIcon />,
    iconOpened: <ArrowDropUpRoundedIcon />,
    number: '2',
  },
  {
    title: 'Buy Crypto History',
    path: '/my/orders/exchange/buysell-history',
    icon: <i className={'icon-buy-crypto-history'} />,
    number: '3',
  },
  {
    title: 'Convert History',
    path: '',
    icon: <i className={'icon-convert-history'} />,
    iconClosed: <ArrowDropDownRoundedIcon />,
    iconOpened: <ArrowDropUpRoundedIcon />,
    number: '4',
    subNav: [
      {
        title: 'Convert History',
        path: '/my/orders/convert/history',
        parentKey: '4',
        ownKey: '8',
      },
      {
        title: 'Open Orders',
        path: '/my/orders/convert/openorder',
        parentKey: '4',
        ownKey: '9',
      },
    ],
  },
]
