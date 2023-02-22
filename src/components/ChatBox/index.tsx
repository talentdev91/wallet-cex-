/** @format */

import React, { useState } from 'react'
// import ReconnectingWebSocket from "reconnecting-websocket";
//material-ui
import { Typography, Button, IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SendIcon from '@material-ui/icons/Send'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import MessageIcon from '@material-ui/icons/Message'
//external
import { wsClient } from '../../config/config'
import { useStyles, ChatBoxProps } from './Style'
import PublicChat from './component/PublicChat'
import SupportChat from './component/SupportChat'
//constant
import { Code } from '../../config/constants'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { publicChat, supportChat } from '../../store/chat/selectors'
import { getPublicChatHistory, getSupportChatHistory } from '../../store/chat'

import jwt_decode from 'jwt-decode'

interface MyToken {
  userId: string
}

function ChatBox({ isChatOpen, getCloseState }: ChatBoxProps) {
  const classes = useStyles({ isChatOpen, getCloseState })
  const dispatch = useAppDispatch()

  const [chatMethod, setChatMethod] = useState('')

  const [message, setMessage] = useState('')
  const [isBackButton, setIsBackButton] = useState(true)

  let decoded: any = []
  // const [sign, setSign] = useState(false);
  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
    // setSign(!sign);
  }

  const publicChatHistory = useAppSelector(publicChat)
  const supportChatHistory = useAppSelector(supportChat)

  var sendPublicMessageData = {
    code: Code.CODE_PUBLIC_CHAT,
    data: {
      userid: parseInt(decoded?.userId),
      msg: message,
    },
  }

  var sendSupportMessageData = {
    code: Code.CODE_CLIENT_MESSAGE,
    data: {
      userid: parseInt(decoded?.userId),
      msg: message,
    },
  }

  React.useEffect(() => {
    const getPublicChatHistories = () => {
      dispatch(getPublicChatHistory())
    }

    const getSupportChatHistories = () => {
      const formData = new FormData()
      formData.append('user_id', decoded?.userId)
      dispatch(getSupportChatHistory(formData))
    }

    getPublicChatHistories()
    getSupportChatHistories()
    var element: any = document.getElementById('chatContent')
    element?.scrollTo(0, element.scrollHeight)
    // eslint-disable-next-line
  }, [dispatch])

  React.useEffect(() => {
    var element: any = document.getElementById('chatContent')
    element?.scrollTo(0, element.scrollHeight)
  }, [publicChatHistory, supportChatHistory, chatMethod])

  const handlePublicSubmit = (e: any) => {
    e.preventDefault()
    wsClient.send(JSON.stringify(sendPublicMessageData))
    setMessage('')
  }

  const handleSupportSubmit = (e: any) => {
    e.preventDefault()
    wsClient.send(JSON.stringify(sendSupportMessageData))
    setMessage('')
  }

  const selectChatMethod = (
    <div className={classes.chatMethod}>
      <Typography className={classes.text3}>Please select chat type</Typography>
      <Button
        variant="contained"
        className={classes.chatMethodButton}
        onClick={() => {
          setChatMethod('supportChat')
          setIsBackButton(false)
        }}
        disableRipple
      >
        Support Team
      </Button>
      <Button
        variant="contained"
        className={classes.chatMethodButton}
        onClick={() => {
          setChatMethod('publicChat')
          setIsBackButton(false)
        }}
        disableRipple
      >
        LiveChat
      </Button>
    </div>
  )

  const supportChatContainer = (
    <div className={classes.chatListContainer} id={'chatContent'}>
      <SupportChat supportChatHistory={supportChatHistory} />
    </div>
  )

  const liveChatContainer = (
    <div className={classes.chatListContainer} id={'chatContent'}>
      <PublicChat chatHistory={publicChatHistory} />
    </div>
  )

  return (
    <div className={classes.chatContainer}>
      <div className={classes.chatHeader}>
        {chatMethod === '' || isBackButton === true ? (
          <MessageIcon className={classes.titleIcon} />
        ) : (
          <IconButton onClick={() => setIsBackButton(true)} style={{ marginRight: '8px', marginLeft: '5px' }}>
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography className={classes.headerTitle}>Welcome to Dongle trade</Typography>

        <IconButton onClick={() => getCloseState(false)} style={{ marginRight: '8px', marginLeft: '5px' }}>
          <KeyboardArrowDownIcon />
        </IconButton>
      </div>
      <div className={classes.chatBody}>
        {isBackButton ? selectChatMethod : chatMethod === 'supportChat' ? supportChatContainer : liveChatContainer}
      </div>
      {chatMethod === '' || isBackButton === true ? (
        <div className={classes.chatFooterNull}></div>
      ) : (
        <div className={classes.chatFooter}>
          <form onSubmit={chatMethod === 'publicChat' ? handlePublicSubmit : handleSupportSubmit}>
            <input
              placeholder="Write message..."
              className={classes.textInputField}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <IconButton className={classes.submit} type="submit">
              <SendIcon />
            </IconButton>
          </form>
        </div>
      )}
    </div>
  )
}

export default ChatBox
