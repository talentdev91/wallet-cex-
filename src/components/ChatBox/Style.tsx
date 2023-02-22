/** @format */

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export interface ChatBoxProps {
  isChatOpen: boolean
  getCloseState: (isCloses: boolean) => void
}

export const useStyles = makeStyles<Theme, ChatBoxProps>((theme) =>
  createStyles({
    chatContainer: {
      position: 'fixed',
      right: 1,
      bottom: 0,
      display: ({ isChatOpen }) => `${isChatOpen ? 'flex' : 'none'}`,
      flexDirection: 'column',
      zIndex: 10,
      width: '400px',
      height: '100%',
      justifyContent: 'end',
    },
    chatHeader: {
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '8px 8px 0 0',
      justifyContent: 'space-between',
      backgroundImage: 'linear-gradient(295.27deg, rgb(21, 20, 26) 0%, rgb(71, 77, 87) 84.52%)',
      boxShadow: 'rgb(24 26 32 / 10%) 0px 0px 1px, rgb(71 77 87 / 8%) 0px 7px 14px, rgb(24 26 32 / 8%) 0px 3px 6px',
    },
    headerTitle: {
      fontSize: '16px',
      color: '#fff',
      fontWeight: 600,
    },
    chatBody: {
      backgroundColor: '#fafafa',
      height: 'calc(100% - 200px)',
      padding: '8px 0 8px 8px',
    },
    chatFooter: {
      backgroundColor: '#fafafa',
      borderTop: '1px solid rgb(234, 236, 239)',
      borderRadius: '0 0 8px 8px',
    },
    chatFooterNull: {
      height: '57px',
      backgroundColor: '#fafafa',
      borderRadius: '0 0 8px 8px',
    },
    chatMethod: {
      display: 'flex',
      flexDirection: 'column',
    },
    chatMethodButton: {
      margin: '40px 40px 10px 40px',
      fontWeight: 'bold',
      padding: '10px 16px',
      letterSpacing: '2px',
      '&:hover': {
        color: 'white',
        backgroundColor: 'rgb(240, 185, 11)',
      },
    },
    text3: {
      textAlign: 'center',
      fontSize: '1rem',
      color: 'rgb(71, 77, 87)',
      marginTop: '1rem',
    },
    chatListContainer: {
      height: '100%',
      overflowX: 'hidden',
      padding: '0px 15px',
      '&::-webkit-scrollbar': {
        backgroundColor: 'white',
      },
    },
    textInputField: {
      padding: '15px 16px',
      margin: '5px 12px',
      width: '70%',
      fontSize: '14px',
      border: 'none',
      '&:focus-visible': {
        outline: 'none',
      },
      backgroundColor: 'transparent',
    },
    chat1: {
      minWidth: '20px',
      width: 'fit-content',
      maxWidth: '300px',
      marginTop: '15px',
      display: 'flex',
    },
    chat2: {
      minWidth: '20px',
      width: 'fit-content',
      marginLeft: 'auto',
      marginRight: '10px',
      maxWidth: '300px',
      marginTop: '15px',
      display: 'flex',
    },
    textArea: {
      padding: '12px',
      borderRadius: '12px 0  12px 12px',
      border: '1px solid #00bcd45c',
      background: '#00bcd40f',
      color: 'black',
      width: 'fit-content',
      marginTop: '2px',
      maxWidth: '200px',
      overflowWrap: 'break-word',
    },
    textArea2: {
      padding: '12px',
      borderRadius: '0px 12px 12px 12px',
      border: '1px solid #9e9e9e66',
      background: '#9e9e9e30',
      width: 'fit-content',
      color: 'black',
      marginTop: '2px',
      maxWidth: '200px',
      overflowWrap: 'break-word',
    },
    textArea3: {
      padding: '12px',
      borderRadius: '0px 12px 12px 12px',
      border: '1px solid #ff98003b',
      background: '#ffeb3b1a',
      width: 'fit-content',
      color: 'black',
      marginTop: '2px',
      maxWidth: '200px',
      overflowWrap: 'break-word',
    },
    rightChat: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap-reverse',
    },
    chatText: {
      fontWeight: 500,
      fontSize: '14px',
      color: 'rgb(71, 77, 87)',
    },
    avatar: {
      color: 'white',
      backgroundColor: '#00bcd4',
      marginLeft: '20px',
      marginTop: '15px',
    },
    avatar1: {
      color: 'white',
      backgroundColor: '#464c55',
      marginRight: '20px',
      marginTop: '20px',
    },
    avatar2: {
      color: 'white',
      backgroundColor: '#464c55',
      display: 'flex',
      marginRight: '20px',
      alignItems: 'center',
      textTransform: 'uppercase',
      marginTop: '20px',
    },
    liveChatUser: {
      fontWeight: 'bold',
      marginRight: '4px',
    },
    liveChatMessage: {
      wordBreak: 'break-word',
      border: '1px solid #e6e8ea',
      padding: '12px 20px',
      fontSize: '14px',
      marginLeft: '12px',
      borderRadius: '8px',
      color: '#474d57',
      // background: "#f5f5f5",
      lineHeight: '20px',
      fontWeight: 500,
    },
    chatShowDiv: {
      marginTop: '16px',
    },
    titleIcon: {
      marginRight: '8px',
      marginLeft: '5px',
      color: 'rgb(240, 185, 11)',
      padding: '12px',
    },
    submit: {
      height: '35px',
      width: '35px',
      backgroundColor: 'rgb(72, 81, 93)',
      '&:hover': {
        backgroundColor: 'rgb(240, 185, 11)',
      },
    },
    msgDetailInfo: {
      fontSize: '.75rem',
      color: '#7c7b7b',
    },
    msgDetailInfoRight: {
      fontSize: '.75rem',
      textAlign: 'right',
      color: '#7c7b7b',
    },
  }),
)
