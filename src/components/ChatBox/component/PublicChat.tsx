/** @format */

import React, { useRef } from 'react'
import { Box, Avatar, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { useStyles, ChatBoxProps } from '../Style'
import { dateToType } from '../../../common/utils'
interface LiveChatProps {
  chatHistory: any
}

function PublicChat({ chatHistory }: LiveChatProps, { isChatOpen, getCloseState }: ChatBoxProps) {
  const messagesEndRef = useRef(null)
  const classes = useStyles({ isChatOpen, getCloseState })
  return (
    <div ref={messagesEndRef}>
      {chatHistory.map((data: any, key: any) => (
        <Box display="flex" pr={1} className={classes.chatShowDiv} key={key}>
          <Avatar alt={data.Email} src="/static/img" className={classes.avatar2}></Avatar>
          <div className={classes.msgInfo}>
            <span className={classes.msgDetailInfo}>
              {'<' + data.Email + '>'}
              {'  '}
              {dateToType(data.CreatedAt)}
            </span>
            <div className={clsx(classes.textArea3)}>
              <Typography className={classes.chatText}>{data.Message}</Typography>
            </div>
          </div>
        </Box>
      ))}
    </div>
  )
}

export default PublicChat
